import express from 'express';
import * as weatherController from "../controllers/weather_controller";


export const router = express.Router();
router.use((req, res, next) => {
    // we'll use this router to return specifically JSON
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

router.get('/', (req, res) => res.send('Welcome to weather API'));

router.get('/cities', weatherController.getCities);

router.get('/city/1', weatherController.getCityDailyForecast);

router.get('/city/5', weatherController.getCityFiveDayForecast);