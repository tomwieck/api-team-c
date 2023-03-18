import { IForecastCity } from "../types/forecast_frontend.types";

export const cities: IForecastCity[] = [
  {
    cityName: "London",
    weatherIcons: [
      { imgId: "01d" },
      { imgId: "02d" },
      { imgId: "03d" },
      { imgId: "04d" },
      { imgId: "01d" },
    ],
    forecasts: [
      {
        date_str: "Today", // 15th, 16th...
        icon_id: "01d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "sunny", // could be used for selected forecast card
      },
      {
        date_str: "15th", // 15th, 16th...
        icon_id: "02d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "16th", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "17th", // 15th, 16th...
        icon_id: "04d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "18th", // 15th, 16th...
        icon_id: "01d",
        temp_day_min: "19°",
        temp_day_max: "22°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "sunny", // could be used for selected forecast card
      },
    ],
  },
  {
    cityName: "New York",
    weatherIcons: [
      { imgId: "03d" },
      { imgId: "04d" },
      { imgId: "03d" },
      { imgId: "02d" },
      { imgId: "04d" },
    ],
    forecasts: [
      {
        date_str: "Today", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "15th", // 15th, 16th...
        icon_id: "04d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "16th", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "17th", // 15th, 16th...
        icon_id: "02d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "18th", // 15th, 16th...
        icon_id: "04d",
        temp_day_min: "19°",
        temp_day_max: "22°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
    ],
  },
  {
    cityName: "Paris",
    weatherIcons: [
      { imgId: "09d" },
      { imgId: "10d" },
      { imgId: "03d" },
      { imgId: "01d" },
      { imgId: "10d" },
    ],
    forecasts: [
      {
        date_str: "Today", // 15th, 16th...
        icon_id: "09d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "15th", // 15th, 16th...
        icon_id: "10d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "16th", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "17th", // 15th, 16th...
        icon_id: "01d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "sunny", // could be used for selected forecast card
      },
      {
        date_str: "18th", // 15th, 16th...
        icon_id: "10d",
        temp_day_min: "19°",
        temp_day_max: "22°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
    ],
  },
  {
    cityName: "Sydney",
    weatherIcons: [
      { imgId: "11d" },
      { imgId: "13d" },
      { imgId: "03d" },
      { imgId: "10d" },
      { imgId: "13d" },
    ],
    forecasts: [
      {
        date_str: "Today", // 15th, 16th...
        icon_id: "11d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "15th", // 15th, 16th...
        icon_id: "13d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "16th", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "17th", // 15th, 16th...
        icon_id: "10d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "18th", // 15th, 16th...
        icon_id: "13d",
        temp_day_min: "19°",
        temp_day_max: "22°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
    ],
  },
  {
    cityName: "Moscow",
    weatherIcons: [
      { imgId: "50d" },
      { imgId: "13d" },
      { imgId: "03d" },
      { imgId: "11d" },
      { imgId: "13d" },
    ],
    forecasts: [
      {
        date_str: "Today", // 15th, 16th...
        icon_id: "50d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "15th", // 15th, 16th...
        icon_id: "13d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "16th", // 15th, 16th...
        icon_id: "03d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "17th", // 15th, 16th...
        icon_id: "11d",
        temp_day_min: "9°",
        temp_day_max: "12°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
      {
        date_str: "18th", // 15th, 16th...
        icon_id: "13d",
        temp_day_min: "19°",
        temp_day_max: "22°",
        wind_speed: "4m/s",
        humidity: 51,
        weather_description: "broken clouds", // could be used for selected forecast card
      },
    ],
  },
];
