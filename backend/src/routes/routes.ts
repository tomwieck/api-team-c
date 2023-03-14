import express from "express";
import axios from "axios";

const router = express.Router();
router.use((req, res, next) => {
  // we'll use this router to return specifically JSON
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// ? helper, controller(req, res)
const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.status === 200) {
      const json = await response.data;
      return json.current.weather;
    }
  } catch (e: unknown) {
    console.log(e);
  }
};

// api/v1/forecast/location/
// appid from ?
// TODO controller
router.get(
  "/api/v1/forecast/location/:latitude/:longitude",
  async (req, res) => {
    const { latitude, longitude } = req.params;
    console.log(`got coords: ${latitude} ${longitude}`);
    // const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=f87a1b9668af7878780bb6d1fd3bc802`;
    // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=f87a1b9668af7878780bb6d1fd3bc802`;
    console.log("GET " + url);
    const result = await fetchData(url);
    console.log(result);
    res.status(200).json(result);
  }
);

export default router;
