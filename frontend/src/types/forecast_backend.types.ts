export interface ApiDaily {
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
