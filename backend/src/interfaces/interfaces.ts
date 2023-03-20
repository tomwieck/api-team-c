export interface ApiDaily {
  dt: number;
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
  rain?: number;
  snow?: number;
  uvi: number;
  wind_deg: number;
  wind_speed: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  pop: number;
  clouds: number;
  sunrise: number;
  sunset: number;
  humidity: number;
}

export interface OneDaysData {
  weather_title: string;
  weather_description: string;
  icon_id: string;
  icon_url: string;
  sunrise_time: number;
  sunset_time: number;
  hours_daylight: number;
  uv_index: number;
  wind_direction: number;
  wind_speed: number;
  temp_day_noon: number;
  temp_day_min: number;
  temp_day_max: number;
  humidity: number;
  percentprec: number;
  expected_snow: number;
  expected_rain: number;
  cloud_cover: number;
}

export interface FiveDaysData {
  cityName: string;
  cityCountry: string;
  date: Number;
  percentprec: number;
  total_rain: number;
  total_snow: number;
  daily: OneDaysData[];
}


export interface HourlyDaysData {
  cityName: string;
  cityCountry: string;
  date: Number;
  percentprec: number;
  total_rain: number;
  total_snow: number;
  hourly: OneDaysData[];
}

export interface ApiHourly {
  dt: number;
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
  rain?: number;
  snow?: number;
  uvi: number;
  wind_deg: number;
  wind_speed: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  pop: number;
  clouds: number;
  sunrise: number;
  sunset: number;
  humidity: number;
}

export interface OneHoursData {
  time: number;
  weather_title: string;
  weather_description: string;
  icon_id: string;
  icon_url: string;
  sunrise_time: number;
  sunset_time: number;
  hours_daylight: number;
  uv_index: number;
  wind_direction: number;
  wind_speed: number;
  temp_day_noon: number;
  temp_day_min: number;
  temp_day_max: number;
  humidity: number;
  percentprec: number;
  expected_snow: number;
  expected_rain: number;
  cloud_cover: number;
}