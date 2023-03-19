import { IForecastCity } from "../types/forecast_frontend.types";

export const cities: IForecastCity[] = [
  {
    cityName: "London",
    weatherIcons: [
      { iconId: "01d" },
      { iconId: "02d" },
      { iconId: "03d" },
      { iconId: "04d" },
      { iconId: "01d" },
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
      { iconId: "03d" },
      { iconId: "04d" },
      { iconId: "03d" },
      { iconId: "02d" },
      { iconId: "04d" },
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
      { iconId: "09d" },
      { iconId: "10d" },
      { iconId: "03d" },
      { iconId: "01d" },
      { iconId: "10d" },
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
      { iconId: "11d" },
      { iconId: "13d" },
      { iconId: "03d" },
      { iconId: "10d" },
      { iconId: "13d" },
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
      { iconId: "50d" },
      { iconId: "13d" },
      { iconId: "03d" },
      { iconId: "11d" },
      { iconId: "13d" },
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
