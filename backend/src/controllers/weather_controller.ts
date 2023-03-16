import { Request, Response } from "express";
import { cities } from '../database/database';

export const getCities = async (req: Request, res: Response) => {
  try {

    res.json(cities).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getCityDailyForecast = async (req: Request, res: Response) => {

  try {
    console.log(req.query);
    if (!req.query.cityId) {
      res.status(404).json("City ID required.");
    } else {

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

export const getCityFiveDayForecast = async (req: Request, res: Response) => {

  try {
    console.log(req.query);
    if (!req.query.cityId) {
      res.status(404).json("City ID required.");
    } else {
      console.log(req.query);
      const city = cities.find(city => city.id === req.query.cityId);

      if (!city) {
        res.status(404).json("Unknown city.");
      } else {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=hourly&appid=${process.env.WEATHER_API_KEY}`
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
