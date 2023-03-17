import { ICityRowProps } from "../components/city_row/city_row";
export const cities: ICityRowProps[] = [
    {
        cityName: "London",
        weatherIcons: [
            { imgUrl: "01d" },
            { imgUrl: "02d" },
            { imgUrl: "03d" },
            { imgUrl: "04d" },
            { imgUrl: "01d" },
        ],
        id: 1,
        forecasts: [
            {
                date_str: "Today", // 15th, 16th...
                icon_url: "01d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "sunny", // could be used for selected forecast card
            },
            {
                date_str: "15th", // 15th, 16th...
                icon_url: "02d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "16th", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "17th", // 15th, 16th...
                icon_url: "04d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "18th", // 15th, 16th...
                icon_url: "01d",
                temp_day_min: "19°",
                temp_day_max: "22°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "sunny", // could be used for selected forecast card
            },
        ],
        toggleRow(e: React.MouseEvent): void;
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
        id: 2,
        forecasts: [
            {
                date_str: "Today", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "15th", // 15th, 16th...
                icon_url: "04d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "16th", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "17th", // 15th, 16th...
                icon_url: "02d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "18th", // 15th, 16th...
                icon_url: "04d",
                temp_day_min: "19°",
                temp_day_max: "22°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
        ],
        toggleRow(e: React.MouseEvent): void;
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
        id: 3,
        forecasts: [
            {
                date_str: "Today", // 15th, 16th...
                icon_url: "09d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "15th", // 15th, 16th...
                icon_url: "10d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "16th", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "17th", // 15th, 16th...
                icon_url: "01d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "sunny", // could be used for selected forecast card
            },
            {
                date_str: "18th", // 15th, 16th...
                icon_url: "10d",
                temp_day_min: "19°",
                temp_day_max: "22°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
        ],
        toggleRow(e: React.MouseEvent): void;
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
        id: 4,
        forecasts: [
            {
                date_str: "Today", // 15th, 16th...
                icon_url: "11d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "15th", // 15th, 16th...
                icon_url: "13d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "16th", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "17th", // 15th, 16th...
                icon_url: "10d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "18th", // 15th, 16th...
                icon_url: "13d",
                temp_day_min: "19°",
                temp_day_max: "22°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
        ],
        toggleRow(e: React.MouseEvent): void;
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
        id: 5,
        forecasts: [
            {
                date_str: "Today", // 15th, 16th...
                icon_url: "50d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "15th", // 15th, 16th...
                icon_url: "13d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "16th", // 15th, 16th...
                icon_url: "03d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "17th", // 15th, 16th...
                icon_url: "11d",
                temp_day_min: "9°",
                temp_day_max: "12°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
            {
                date_str: "18th", // 15th, 16th...
                icon_url: "13d",
                temp_day_min: "19°",
                temp_day_max: "22°",
                wind_speed: "4m/s",
                humidity: 51,
                weather_description: "broken clouds", // could be used for selected forecast card
            },
        ],
        toggleRow(e: React.MouseEvent): void;
    },
];