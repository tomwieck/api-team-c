import { cities, City } from "../database/database";
import { Cache5Day } from "../models/cache5";

import { ApiDaily, OneDaysData, FiveDaysData } from "../interfaces/interfaces";

export const servGet5DaysForecast = async (id: string) => {
  const city = cities.find((city) => city.id === id);

  if (!city) {
    return null;
  } else {
    const cachedRecord = await Cache5Day.findOne({
      where: { id: city.id },
    });

    const isCacheFresh =
      cachedRecord &&
      Date.now() - 1000 * 60 * 60 * 4 < cachedRecord.updatedAt.getTime();

    cachedRecord && isCacheFresh
      ? console.log("Using cached record")
      : console.log("Using API");

    const apiData =
      cachedRecord && isCacheFresh
        ? JSON.parse(cachedRecord.json)
        : await (async (city: City) => {
            const response = await fetch(
              `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`
            );
            return await response.json();
          })(city);

    if (cachedRecord) {
      if (!isCacheFresh) {
        await Cache5Day.update(
          { id: city.id, json: JSON.stringify(apiData) },
          { where: { id: city.id } }
        );
      }
    } else {
      await Cache5Day.create({ id: city.id, json: JSON.stringify(apiData) });
    }

    const apiDaily: ApiDaily[] = apiData.daily;

    const days: OneDaysData[] = apiDaily.slice(0, 5).map((day) => {
      const weather = day.weather[0];

      return {
        date: day.dt,
        icon_id: weather.icon as string,
        icon_url: `http://openweather/icons/${weather.icon}.jpg`,
        weather_title: weather.main,
        weather_description: weather.description,
        expected_rain: day.rain ?? -1,
        expected_snow: day.snow ?? -1,
        uv_index: day.uvi,
        wind_direction: day.wind_deg,
        wind_speed: day.wind_speed,
        temp_day_noon: day.temp.day,
        temp_day_min: day.temp.min,
        temp_day_max: day.temp.max,
        percentprec: day.pop * 100,
        cloud_cover: day.clouds * 100,
        sunrise_time: day.sunrise,
        sunset_time: day.sunset,
        hours_daylight: day.sunset - day.sunrise,
        humidity: day.humidity,
      };
    });

    const data: FiveDaysData = {
      cityName: city.city,
      countryName: city.country,
      date: apiData.current.dt,
      daily: days,
      percentprec: apiData.current.pop, // Math.floor(100 - days.reduce((total, today) => total * (1 - today.percentprec / 100), 100)),
      total_rain: apiData.current.rain ?? -1, // days.reduce((total, today) => today.expected_rain > 0 && total >= 0 ? total + today.expected_rain : -1, 1),
      total_snow: apiData.current.snow ?? -1, // days.reduce((total, today) => today.expected_snow > 0 && total >= 0 ? total + today.expected_snow : -1, 1),
    };
    return data;
  }
};
