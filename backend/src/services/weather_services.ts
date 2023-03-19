import { cities, City } from "../database/database";
import { Cache5Day, Cache1Day } from "../models/cache";

import {
  ApiHourly,
  ApiDaily,
  OneHoursData,
  OneDaysData,
  HourlyDaysData,
  FiveDaysData,
} from "../interfaces/weather_interfaces";

export const getCities = async () => {
  const data = cities.map(({ id, city, country, lat, lon }) => {
    return { id, city, country, longName: `${city} (${country})` };
  });
  return data;
};

export const get5DaysForecast = async (id: string) => {

  const city = cities.find((city) => city.id === id);

  if (!city) {
    return null;
  } else {

    const cachedRecord = await Cache5Day.findOne({
      where: { id: city.id }
    })

    const isCacheFresh = (cachedRecord && Date.now() - 1000 * 60 * 60 * 4 < cachedRecord.updatedAt.getTime());

    (cachedRecord && isCacheFresh)? console.log("Using cached record") : console.log("Using API");

    const apiData = (cachedRecord && isCacheFresh) ?
      JSON.parse(cachedRecord.json)
      :
      await (async (city: City) => {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        return await response.json();
      })(city);

    if (cachedRecord) {
      if (!isCacheFresh) {
        await Cache5Day.update({ id: city.id, json: JSON.stringify(apiData) }, { where: { id: city.id } })
      }
    }
    else {
      await Cache5Day.create({ id: city.id, json: JSON.stringify(apiData) });
    }

    const apiDaily: ApiDaily[] = apiData.daily;
    
    const days: OneDaysData[] = apiDaily.slice(5 - 1).map((day) => {
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
      date: apiData.current.dt,
      daily: days,
      percentprec: apiData.current.pop, // Math.floor(100 - days.reduce((total, today) => total * (1 - today.percentprec / 100), 100)),
      total_rain: apiData.current.rain ?? -1, // days.reduce((total, today) => today.expected_rain > 0 && total >= 0 ? total + today.expected_rain : -1, 1),
      total_snow: apiData.current.snow ?? -1, // days.reduce((total, today) => today.expected_snow > 0 && total >= 0 ? total + today.expected_snow : -1, 1),
    };
    return data;
  }
};

export const get1DayForecast = async (id: string) => {

  const city = cities.find((city) => city.id === id);

  if (!city) {
    return null;
  } else {

    const cachedRecord = await Cache1Day.findOne({
      where: { id: city.id }
    })

    const isCacheFresh = (cachedRecord && Date.now() - 1000 * 60 * 15 < cachedRecord.updatedAt.getTime());

    (cachedRecord && isCacheFresh)? console.log("Using cached record") : console.log("Using API");

    const apiData = (cachedRecord && isCacheFresh) ?
      JSON.parse(cachedRecord.json)
      :
      await (async (city: City) => {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=daily&appid=${process.env.WEATHER_API_KEY}&units=metric`);
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
      date: apiData.current.dt,
      hourly: hours,
      percentprec: Math.floor(100 - hours.reduce((total, today) => total * (1 - today.percentprec / 100), 100)),
      total_rain: hours.reduce((total, hour) => hour.expected_rain > 0 && total >= 0 ? total + hour.expected_rain : -1, 1),
      total_snow: hours.reduce((total, hour) => hour.expected_snow > 0 && total >= 0 ? total + hour.expected_snow : -1, 1),
    };
    return data;
  }
};

export const updateFavourites = async () => { };

export const getFavourites = async () => { };
