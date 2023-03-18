export interface IForecastIcon {
  imgUrl: string;
}

export interface IForecastCity {
  cityName: string;
  weatherIcons: IForecastIcon[];
  forecasts: IForecast[];
}

export interface IForecast {
  date_str: string;
  icon_id: string;
  temp_day_min: string;
  temp_day_max: string;
  wind_speed: string;
  humidity: number;
  weather_description: string;
}