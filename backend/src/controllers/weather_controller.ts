import { Request, Response } from "express";
import { start } from "repl";
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

      const city = cities.find(city => city.id === req.query.id);

      if (!city) {
        res.status(404).json("Unknown city.");
      } else {

        interface ApiDaily {
          weather: {
            icon: string;
            main: string;
            description: string;
          }[];
          rain?: number;
          snow?: number;
          uvi: number;
          wind_deg: number;
          wind_speed: number;
          temp: {
            day: number;
            min: number;
            max: number;
          };
          pop: number;
          clouds: number;
          sunrise: number;
          sunset: number;
          humidity: number;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );
        const apiData = await response.json();
        const apiDaily: ApiDaily[] = apiData.daily;

        interface OneDaysData {
          weather_title: String;
          weather_description: String;
          icon_id: String;
          icon_url: String;
          sunrise_time: number;
          sunset_time: number;
          hours_daylight: number;
          uv_index: number;
          wind_direction: number;
          wind_speed: number;
          temp_day_noon: number;
          temp_day_min: number;
          temp_day_max: number;
          humidity: number;
          percentprec: number;
          expected_snow: number;
          expected_rain: number;
          cloud_cover: number;
        }

        interface FiveDaysData {
          cityName: String;
          date: Number;
          percentprec: number;
          total_rain: number;
          total_snow: number;
          daily: OneDaysData[];
        }

        const days: OneDaysData[] = apiDaily.map((day) => {

          const weather = day.weather[0];

          return {
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
            percentprec: day.pop*100,
            cloud_cover: day.clouds*100,
            sunrise_time: day.sunrise,
            sunset_time: day.sunset,
            hours_daylight: day.sunset - day.sunrise,
            humidity: day.humidity,
          }
        });

        const data: FiveDaysData = {
          cityName: city.city,
          date: apiData.current.dt,
          daily: days,
          percentprec: Math.floor(100-days.reduce((total, today)=>total*(1-today.percentprec/100), 100)),
          total_rain: days.reduce((total, today)=>(today.expected_rain>0 && total >=0) ? total+today.expected_rain:-1, 1),
          total_snow: days.reduce((total, today)=>(today.expected_snow>0 && total >=0) ? total+today.expected_snow:-1, 1)
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
      const city = cities.find(city => city.id === req.query.id);

      if (!city) {
        res.status(404).json("Unknown city.");
      } else {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=daily&appid=${process.env.WEATHER_API_KEY}&units=metric`
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
