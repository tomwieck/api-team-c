import express from 'express';
import * as weatherController from "../controllers/weather_controller";


export const router = express.Router();
 
router.get('/', (req, res) => res.send('Welcome to weather API'));

router.get('/cities', weatherController.getCities);

router.get('/city/1', weatherController.getCityDailyForecast);

router.get('/city/5', weatherController.getCityFiveDayForecast);

