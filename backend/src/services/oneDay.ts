import { City } from "../models/cities";
import { start } from "repl";
import { Cache1Day } from "../models/cache1";

import { ApiHourly, OneHoursData, HourlyDaysData } from "../interfaces/interfaces";

export const servGet1DayForecast = async (id: string) => {

  const city = await City.findOne({ where: { id } });

  if (!city) {
    return null;
  } else {

    const cachedRecord = await Cache1Day.findOne({
      where: { id }
    })

    const isCacheFresh = (cachedRecord && Date.now() - 1000 * 60 * 15 < cachedRecord.updatedAt.getTime());

    (cachedRecord && isCacheFresh) ? console.log("Using cached record") : console.log("Using API");

    const apiData = (cachedRecord && isCacheFresh) ?
      JSON.parse(cachedRecord.json)
      :
      await (async (city: City) => {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=daily&appid=${process.env.WEATHER_API_KEY}&units=metric`);

        if (response.status !== 200)
          throw new Error(`Openweather returned status ${response.status}: ${response.statusText}`);

        return await response.json();
      })(city);

    if (cachedRecord) {
      if (!isCacheFresh) {
        await Cache1Day.update({ id: city.id, json: JSON.stringify(apiData) }, { where: { id: city.id } })
      }
    }
    else {
      await Cache1Day.create({ id: city.id, json: JSON.stringify(apiData) });
    }

    const apiHourly: ApiHourly[] = apiData.hourly;

    const hours: OneHoursData[] = apiHourly.map((hour) => {
      const weather = hour.weather[0];

      return {
        time: hour.dt,
        icon_id: weather.icon as string,
        icon_url: `http://openweather/icons/${weather.icon}.jpg`,
        weather_title: weather.main,
        weather_description: weather.description,
        expected_rain: hour.rain ?? -1,
        expected_snow: hour.snow ?? -1,
        uv_index: hour.uvi,
        wind_direction: hour.wind_deg,
        wind_speed: hour.wind_speed,
        temp_day_noon: hour.temp.day,
        temp_day_min: hour.temp.min,
        temp_day_max: hour.temp.max,
        percentprec: hour.pop * 100,
        cloud_cover: hour.clouds * 100,
        sunrise_time: hour.sunrise,
        sunset_time: hour.sunset,
        hours_daylight: hour.sunset - hour.sunrise,
        humidity: hour.humidity,
      };
    });

    const data: HourlyDaysData = {
      cityName: city.city,
      cityCountry: city.country,
      date: apiData.current.dt,
      hourly: hours,
      percentprec: Math.floor(100 - hours.reduce((total, today) => total * (1 - today.percentprec / 100), 100)),
      total_rain: hours.reduce((total, hour) => hour.expected_rain > 0 && total >= 0 ? total + hour.expected_rain : -1, 1),
      total_snow: hours.reduce((total, hour) => hour.expected_snow > 0 && total >= 0 ? total + hour.expected_snow : -1, 1),
    };
    return data;
  }
};

