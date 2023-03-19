import { FiveDaysData, OneDaysData } from "../types/forecast_backend.types";
import { IForecast, IForecastCity } from "../types/forecast_frontend.types";

const get_day_forecast_data = (dayForecast: OneDaysData): IForecast => {
  return {
    // TODO date_str doesn't exist for now
    date_str: "Today",
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
    const forecasts = daily_data.map(get_day_forecast_data);
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
