import { Request, Response } from "express";

export const getCities = async (req: Request, res: Response) => {
  try {
    const cities = ["London", "New York", "Paris", "Munich"];
    res.json(cities).status(200);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};


export const getCity1 = async (req: Request, res: Response) => {
    try {
      const city1 ={/* fill with data*/ }   ;
      res.json(city1).status(200);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };

  export const getCity5 = async (req: Request, res: Response) => {
    try {
      const city5 ={/* fill with data*/ }   ;
      res.json(city5).status(200);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };

export default getCities;