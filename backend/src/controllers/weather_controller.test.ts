import request from "supertest";
import { app } from "../app";
import * as weatherService from "../services/weather_services"; 


afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../services/weather_services");


const dummyCities = [
  {
    id: "Kab6934",
    city: "Kabul",
    country: "Afghanistanpooooo",
    longName: "Kabul (Afghanistan)",
  },
  {
    id: "Mar1960",
    city: "Mariehamn",
    country: "Aland Islands",
    longName: "Mariehamn (Aland Islands)",
  },
];

const dummy1DayForeCast ={
  "lat": 69.1723,
  "lon": 34.5281,
  "timezone": "Europe/Moscow",
  "timezone_offset": 10800,
  "current": {
    "dt": 1679096490,
    "sunrise": 1679111547,
    "sunset": 1679154467,
    "temp": -14.74,
    "feels_like": -21.74,
    "pressure": 1025,
    "humidity": 94,
    "dew_point": -15.41,
    "uvi": 0,
    "clouds": 54,
    "visibility": 10000,
    "wind_speed": 4.19,
    "wind_deg": 236,
    "wind_gust": 4.54,
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }
    ]
  },
  "hourly": [
    {
      "dt": 1679094000,
      "temp": -14.73,
      "feels_like": -21.73,
      "pressure": 1025,
      "humidity": 95,
      "dew_point": -15.29,
      "uvi": 0,
      "clouds": 56,
      "visibility": 10000,
      "wind_speed": 4.36,
      "wind_deg": 238,
      "wind_gust": 4.81,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.13
    }]
}

const dummy5dayForecast={
  "cityName": "Kabul",
  "date": 1679096503,
  "daily": [
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 0.73,
      "uv_index": 0.57,
      "wind_direction": 160,
      "wind_speed": 11.6,
      "temp_day_noon": -7.7,
      "temp_day_min": -14.92,
      "temp_day_max": -3.2,
      "percentprec": 98,
      "cloud_cover": 10000,
      "sunrise_time": 1679111547,
      "sunset_time": 1679154467,
      "hours_daylight": 42920,
      "humidity": 74
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 4.89,
      "uv_index": 0.54,
      "wind_direction": 2,
      "wind_speed": 12.32,
      "temp_day_noon": -0.21,
      "temp_day_min": -7.66,
      "temp_day_max": 0.03,
      "percentprec": 100,
      "cloud_cover": 10000,
      "sunrise_time": 1679197679,
      "sunset_time": 1679241098,
      "hours_daylight": 43419,
      "humidity": 87
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 2.53,
      "uv_index": 0.37,
      "wind_direction": 14,
      "wind_speed": 10.92,
      "temp_day_noon": -4.14,
      "temp_day_min": -6.98,
      "temp_day_max": -1.39,
      "percentprec": 99,
      "cloud_cover": 10000,
      "sunrise_time": 1679283811,
      "sunset_time": 1679327729,
      "hours_daylight": 43918,
      "humidity": 90
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 0.55,
      "uv_index": 0.62,
      "wind_direction": 352,
      "wind_speed": 5.66,
      "temp_day_noon": -6.86,
      "temp_day_min": -10.25,
      "temp_day_max": -3.12,
      "percentprec": 88,
      "cloud_cover": 9900,
      "sunrise_time": 1679369943,
      "sunset_time": 1679414360,
      "hours_daylight": 44417,
      "humidity": 89
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 4.56,
      "uv_index": 0.39,
      "wind_direction": 323,
      "wind_speed": 11.19,
      "temp_day_noon": -7.79,
      "temp_day_min": -11.65,
      "temp_day_max": -5.16,
      "percentprec": 96,
      "cloud_cover": 10000,
      "sunrise_time": 1679456075,
      "sunset_time": 1679500991,
      "hours_daylight": 44916,
      "humidity": 62
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 1.31,
      "uv_index": 1,
      "wind_direction": 239,
      "wind_speed": 15,
      "temp_day_noon": -9.41,
      "temp_day_min": -12.21,
      "temp_day_max": -7.16,
      "percentprec": 53,
      "cloud_cover": 9700,
      "sunrise_time": 1679542206,
      "sunset_time": 1679587622,
      "hours_daylight": 45416,
      "humidity": 90
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 1.97,
      "uv_index": 1,
      "wind_direction": 311,
      "wind_speed": 8.75,
      "temp_day_noon": -6.51,
      "temp_day_min": -12.66,
      "temp_day_max": -6.19,
      "percentprec": 42,
      "cloud_cover": 9200,
      "sunrise_time": 1679628338,
      "sunset_time": 1679674253,
      "hours_daylight": 45915,
      "humidity": 69
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 10.45,
      "uv_index": 1,
      "wind_direction": 308,
      "wind_speed": 5.14,
      "temp_day_noon": -7.6,
      "temp_day_min": -10,
      "temp_day_max": -7.3,
      "percentprec": 74,
      "cloud_cover": 10000,
      "sunrise_time": 1679714469,
      "sunset_time": 1679760884,
      "hours_daylight": 46415,
      "humidity": 80
    }
  ],
  "percentprec": 100,
  "total_rain": -1,
  "total_snow": 27.99
}

describe("Test home API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
  });

  test("successfully returned an array of cities", async () => {    
    (
      weatherService.getCities as jest.Mock
    ).mockResolvedValue(dummyCities);
    // Act
    const res = await request(app).get("/cities");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummyCities);
  });

  test("successfully returned one day forecast", async () => {    
    (
      weatherService.get1DayForcast as jest.Mock
    ).mockResolvedValue(dummy1DayForeCast);
    // Act
    const res = await request(app).get("/city/1?id=Kab6934");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummy1DayForeCast);
  });

  test("successfully returned five day forecast", async () => {    
    (
      weatherService.get5DaysForecast as jest.Mock
    ).mockResolvedValue(dummy5dayForecast);
    // Act
    const res = await request(app).get("/city/5?id=Kab6934");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummy5dayForecast);
  });

  test("successfully returned 404 when no id supplied for one day forecast", async () => {    
     
    const res = await request(app).get("/city/1");
    // Assert
    expect(res.statusCode).toEqual(404);
    
  });
  test("successfully returned 404 when an invalid id supplied for one day forecast", async () => {    
    (
      weatherService.get1DayForcast as jest.Mock
    ).mockResolvedValue(null);
    // Act
    const res = await request(app).get("/city/1?id=xxxx");
    // Assert
    expect(res.statusCode).toEqual(404);
    
  });
  
  test("successfully returned 404 when no id supplied for five day forecast", async () => {    
     
    const res = await request(app).get("/city/5");
    // Assert
    expect(res.statusCode).toEqual(404);
    
  });

  test("successfully returned 404 when an invalid id supplied for one day forecast", async () => {    
    (
      weatherService.get5DaysForecast as jest.Mock
    ).mockResolvedValue(null);
    // Act
    const res = await request(app).get("/city/5?id=xxxx");
    // Assert
    expect(res.statusCode).toEqual(404);
    
  });

});


