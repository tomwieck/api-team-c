import { Request, Response } from "express";


export const getCities = async (req: Request, res: Response) => {
  try {
    const cities = ["London", "New York", "Paris", "Munich"];
    res.json(cities).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

 
export const getCityDailyForecast = async (req:Request,
  res: Response) => {
  try {
    console.log(req.query);
     if (!req.query.city) {
      res.status(404).json("City is missing");
    } else {
      let city = req.query.city;
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
      );
  
      const data = await response.json();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCityFiveDayForecast = async (req: Request, res: Response) => {
  try {
    const city5 = {
      /* fill with data*/
    };
    res.json(city5).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export default getCities;
