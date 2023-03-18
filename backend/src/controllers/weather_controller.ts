import { Request, Response } from "express";
import { connected } from "process";
import { start } from "repl";
import { cities } from '../database/database';
import * as weatherService from "../services/weather_services"; 


export const getCities = async (req: Request, res: Response) => {
  try {
    const data =  await weatherService.getCitiesData();
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getCityFiveDayForecast = async (req: Request, res: Response) => {
  try {
    
    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const data = await weatherService.get5DayForecast(req.query.id.toString());
     
      if (!data) {
        res.status(404).json("Unknown city.");
      } else {      
        res.status(200).json(data);

      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export const getCityDailyForecast = async (req: Request, res: Response) => {

  try {
    
    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {
      
      const data = await weatherService.get1DayForcast(req.query.id.toString()); 
      if (!data) {
         
        res.status(404).json("Unknown city.");
      } else {
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }

};

export default getCities;
