import { Request, Response } from "express";
// import { connected } from "process";
// import { start } from "repl";
// import { cities } from '../database/database';
import { servGet5DaysForecast } from "../services/fiveDay";
import { servGet1DayForecast } from "../services/oneDay";
import * as cityService from "../services/cities";
import * as settingsService from "../services/settings"
import { City } from "../models/cities";


export const getCities = async (req: Request, res: Response) => {
  try {
    const data = await cityService.getCityList();
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const filterCities = async (req: Request, res: Response) => {
  try {
    const filter = req.query.filter as string;
    console.log("filter by ", filter);
    const data = await cityService.filterCityList(filter);
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCityData = async (req: Request, res: Response) => {
  try {
    const data: City[] = await cityService.getCityData();
    res.json(data).status(200);
  } catch (error) {
    res.status(400).json({ name: (error as Error).name, message: (error as Error).message });
  }
};

export const addNewCity = async (req: Request, res: Response) => {
  const city: City = req.body;
  try {
    if (city) {
      await cityService.saveCity(city);
      res.json("City updated.").status(200);
    } else {
      res.json("Error: POST /admin/city requires full city data { id, city, country, lat, lon } is JSON format as body of request.").status(400);
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteCity = async (req: Request, res: Response) => {
  const city = req.query.id;
  try {
    if (city) {
      const data = await cityService.deleteCity(city.toString());
      res.json(data).status(200);
    }
    else {
      res.json("Error: /admin/city DELETE requires 'id' of city to be deleted.").status(200);
    }
  }
  catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const updateCity = async (req: Request, res: Response) => {
  const id = req.params.id;
  const city = req.body;
  try {
    if( city && id ) {
    const data = await cityService.updateCity(id, city);
    res.json(data).status(200);
    } else {
      res.json("Error: /admin/city PUT requires 'id' of city to be updated and full city data { id, city, country, lat, lon } is JSON format as body of request.").status(400);
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getFiveDayForecast = async (req: Request, res: Response) => {
  try {

    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const data = await servGet5DaysForecast(req.query.id.toString());

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

export const getOneDayForecast = async (req: Request, res: Response) => {

  try {

    if (!req.query.id) {
      res.status(404).json("City ID required.");
    } else {

      const data = await servGet1DayForecast(req.query.id.toString());
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

export const getSettings = async (req: Request, res: Response) => {
  try {
    const username = req.query.username;
    if (username) {
      const data = await settingsService.getSettings(username.toString());
      res.json(data).status(200);
    } else {
      res.status(400).json({ message: "Get settings - username required" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const saveSettings = async (req: Request, res: Response) => {
  const settings = req.query;
  try {
    if (settings && settings.username) {
      await settingsService.saveSettings(settings);
      res.json().status(200);
    }
    else {
      res.status(400).json({ message: "Save settings - username required" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


