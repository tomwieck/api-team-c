import { Request, Response } from "express";
import { cities } from '../database/database';

export const getCities = async (req: Request, res: Response) => {
  try {
    const data = cities.map(({ id, city, country, lat, lon }) => { return { id, city, country, longName: `${city} (${country})` } })
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getCityFiveDayForecast = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const city = cities.find(city => city.id === req.query.cityId);

      if (!city) {
        res.status(404).json("Unknown city.");
      } else {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}`
        );
        const apidata = await response.json();
        const apiDaily = apidata.daily;

        interface OneDaysData {
          main: String;
          detail: String;
          icon_id: String;
          icon_url: String;
          sunrise_time: number;
          sunset_time: number;
          hours_daylight: number;
          uv_index: number;
          wind_direction: String;
          wind_speed: number;
          temp_day: number;
          temp_min: number;
          temp_max: number;
          percentprec: number;
          expected_snow: number;
          expected_rain: number;
          air_quality: number;
          cloud_cover: number;
        }

        interface FiveDaysData {
          cityName: String;
          date: Number;
          percentprec: number;
          total_rain: number;
          total_snow: number;
          uv_index: Number;
          daily: OneDaysData[];
        }

        let data: FiveDaysData;

        for (let i = 0; i < 5; i++) {
          const day: OneDaysData = {
            icon_id: apiDaily[i].weather.icon as String,
            icon_url: `http://openweather/icons/${apiDaily[i].weather.icon}.jpg`,
            main: apiDaily.weather.main,
            rainexpected_rain: apiDaily.rain,
            snowMM: apiDaily.snow,
            uv_index: apiDaily.uvi,
            detail: apiDaily.weather.description,
          };
          data.daily.push(day);
        }

        data = {
          cityName: city.city,
          date: apidata.json.dt,
          percentprec: apiDaily.pop,
          daily: []
        };

        res.status(200).json(data);

      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export const getCityDailyForecast = async (req: Request, res: Response) => {

  try {
    console.log(req.query);
    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {
      console.log(req.query);
      const city = cities.find(city => city.id === req.query.cityId);

      if (!city) {
        res.status(404).json("Unknown city.");
      } else {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=daily&appid=${process.env.WEATHER_API_KEY}`
        );
        const data = await response.json();
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export default getCities;
