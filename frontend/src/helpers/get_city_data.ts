import { FiveDaysData, OneDaysData } from "../types/forecast_backend.types";
import { IForecast, IForecastCity } from "../types/forecast_frontend.types";

const getDate = (index: number) => {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() + index);
  console.log(newDate);
  return newDate.toLocaleDateString();
}

const get_day_forecast_data = (dayForecast: OneDaysData, index: number): IForecast => {
  console.log(index)
  return {
    date_str: getDate(index),

    icon_id: dayForecast.icon_id,
    temp_day_min: `${Math.floor(dayForecast.temp_day_min)}°`,
    temp_day_max: `${Math.floor(dayForecast.temp_day_max)}°`,
    wind_speed: `${Math.floor(dayForecast.wind_speed)}nɒt`,
    humidity: dayForecast.humidity,
    weather_description: dayForecast.weather_description,
  };
};

export const get_city_data = (
  data: FiveDaysData | undefined
): IForecastCity | undefined => {
  if (data !== undefined) {
    const daily_data = data.daily.slice(0, 5);
    const forecasts = daily_data.map((forecast, index) => get_day_forecast_data(forecast, index));
    const weatherIcons = forecasts.map((forecast) => ({
      iconId: forecast.icon_id,
    }));
    return {
      cityName: data.cityName,
      weatherIcons,
      forecasts,
    };
  }
};
