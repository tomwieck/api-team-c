import express from 'express';
import * as weatherController from "../controllers/weather_controller";

export const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to weather API'));

router.get('/cities', (req, res) => weatherController.getCities);

router.get('/city/1/', (req, res) => weatherController.getCity1);

router.get('/city/5/', (req, res) => weatherController.getCity5);
 


