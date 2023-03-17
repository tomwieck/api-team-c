interface IForecastIcon {
    imgUrl: string;
  }
  
  interface IForecast {
    date_str: string;
    icon_id: string;
    temp_day_min: string;
    temp_day_max: string;
    wind_speed: string;
    humidity: number;
    weather_description: string;
  }
  
  interface IForecastCity {
    cityName: string;
    weatherIcons: IForecastIcon[];
    forecasts: IForecast[];
  }
  
  interface IForecast {
    date_str: string;
    icon_id: string;
    temp_day_min: string;
    temp_day_max: string;
    wind_speed: string;
    humidity: number;
    weather_description: string;
  }
  
  export const cities: IForecastCity[] = [
    {
      cityName: "London",
      weatherIcons: [
        { imgUrl: "01d" },
        { imgUrl: "02d" },
        { imgUrl: "03d" },
        { imgUrl: "04d" },
        { imgUrl: "01d" },
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
        { imgUrl: "03d" },
        { imgUrl: "04d" },
        { imgUrl: "03d" },
        { imgUrl: "02d" },
        { imgUrl: "04d" },
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
        { imgUrl: "09d" },
        { imgUrl: "10d" },
        { imgUrl: "03d" },
        { imgUrl: "01d" },
        { imgUrl: "10d" },
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
        { imgUrl: "11d" },
        { imgUrl: "13d" },
        { imgUrl: "03d" },
        { imgUrl: "10d" },
        { imgUrl: "13d" },
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
        { imgUrl: "50d" },
        { imgUrl: "13d" },
        { imgUrl: "03d" },
        { imgUrl: "11d" },
        { imgUrl: "13d" },
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