
import request from "supertest";
import { app } from "../app";
import * as cityservice from "../services/cities";
import * as fiveDayService from "../services/fiveDay";
import * as oneDayService from "../services/oneDay";

afterEach(() => {
  jest.resetAllMocks();
});
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
const dummy1DayForeCast = {
  "cityName": "Izmir",
  "date": 1679260091,
  "daily": [
    {
      "date": 1679306400,
      "icon_id": "01d",
      "icon_url": "http://openweather/icons/01d.jpg",
      "weather_title": "Clear",
      "weather_description": "clear sky",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 5.58,
      "wind_direction": 38,
      "wind_speed": 3.8,
      "temp_day_noon": 16.12,
      "temp_day_min": 6.1,
      "temp_day_max": 18.24,
      "percentprec": 0,
      "cloud_cover": 100,
      "sunrise_time": 1679285748,
      "sunset_time": 1679329339,
      "hours_daylight": 43591,
      "humidity": 51
    },
    {
      "date": 1679392800,
      "icon_id": "04d",
      "icon_url": "http://openweather/icons/04d.jpg",
      "weather_title": "Clouds",
      "weather_description": "overcast clouds",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 5.08,
      "wind_direction": 296,
      "wind_speed": 2.32,
      "temp_day_noon": 19.05,
      "temp_day_min": 8.96,
      "temp_day_max": 20.33,
      "percentprec": 0,
      "cloud_cover": 10000,
      "sunrise_time": 1679372055,
      "sunset_time": 1679415795,
      "hours_daylight": 43740,
      "humidity": 36
    },
    {
      "date": 1679479200,
      "icon_id": "10d",
      "icon_url": "http://openweather/icons/10d.jpg",
      "weather_title": "Rain",
      "weather_description": "moderate rain",
      "expected_rain": 5.75,
      "expected_snow": -1,
      "uv_index": 2.78,
      "wind_direction": 228,
      "wind_speed": 4.05,
      "temp_day_noon": 15.62,
      "temp_day_min": 10.69,
      "temp_day_max": 16.48,
      "percentprec": 100,
      "cloud_cover": 10000,
      "sunrise_time": 1679458361,
      "sunset_time": 1679502252,
      "hours_daylight": 43891,
      "humidity": 62
    },
    {
      "date": 1679565600,
      "icon_id": "02d",
      "icon_url": "http://openweather/icons/02d.jpg",
      "weather_title": "Clouds",
      "weather_description": "few clouds",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 5.63,
      "wind_direction": 27,
      "wind_speed": 3.91,
      "temp_day_noon": 16.61,
      "temp_day_min": 8.86,
      "temp_day_max": 17.86,
      "percentprec": 36,
      "cloud_cover": 1200,
      "sunrise_time": 1679544667,
      "sunset_time": 1679588708,
      "hours_daylight": 44041,
      "humidity": 53
    },
    {
      "date": 1679652000,
      "icon_id": "01d",
      "icon_url": "http://openweather/icons/01d.jpg",
      "weather_title": "Clear",
      "weather_description": "clear sky",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 5.83,
      "wind_direction": 332,
      "wind_speed": 2.85,
      "temp_day_noon": 18.63,
      "temp_day_min": 8.3,
      "temp_day_max": 19.85,
      "percentprec": 0,
      "cloud_cover": 200,
      "sunrise_time": 1679630973,
      "sunset_time": 1679675164,
      "hours_daylight": 44191,
      "humidity": 43
    },
    {
      "date": 1679738400,
      "icon_id": "04d",
      "icon_url": "http://openweather/icons/04d.jpg",
      "weather_title": "Clouds",
      "weather_description": "broken clouds",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 6,
      "wind_direction": 295,
      "wind_speed": 2.84,
      "temp_day_noon": 19.49,
      "temp_day_min": 10.54,
      "temp_day_max": 21.15,
      "percentprec": 0,
      "cloud_cover": 6200,
      "sunrise_time": 1679717279,
      "sunset_time": 1679761620,
      "hours_daylight": 44341,
      "humidity": 40
    }
  ],
  "total_rain": -1,
  "total_snow": -1
};
const dummy5dayForecast =
{
  "cityName": "Kabul",
  "date": 1679215023,
  "daily": [
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 4.09,
      "uv_index": 0.61,
      "wind_direction": 336,
      "wind_speed": 16.57,
      "temp_day_noon": -0.71,
      "temp_day_min": -8.1,
      "temp_day_max": -0.57,
      "percentprec": 100,
      "cloud_cover": 10000,
      "sunrise_time": 1679197679,
      "sunset_time": 1679241098,
      "hours_daylight": 43419,
      "humidity": 84
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 3.04,
      "uv_index": 0.35,
      "wind_direction": 342,
      "wind_speed": 12.62,
      "temp_day_noon": -4.75,
      "temp_day_min": -7.2,
      "temp_day_max": -1.29,
      "percentprec": 96,
      "cloud_cover": 10000,
      "sunrise_time": 1679283811,
      "sunset_time": 1679327729,
      "hours_daylight": 43918,
      "humidity": 93
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 1.9,
      "uv_index": 0.64,
      "wind_direction": 354,
      "wind_speed": 11.15,
      "temp_day_noon": -4.93,
      "temp_day_min": -9.62,
      "temp_day_max": -3.46,
      "percentprec": 100,
      "cloud_cover": 10000,
      "sunrise_time": 1679369943,
      "sunset_time": 1679414360,
      "hours_daylight": 44417,
      "humidity": 83
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "light snow",
      "expected_rain": -1,
      "expected_snow": 0.57,
      "uv_index": 0.42,
      "wind_direction": 273,
      "wind_speed": 11.7,
      "temp_day_noon": -9.02,
      "temp_day_min": -12.24,
      "temp_day_max": -5.99,
      "percentprec": 50,
      "cloud_cover": 8100,
      "sunrise_time": 1679456075,
      "sunset_time": 1679500991,
      "hours_daylight": 44916,
      "humidity": 80
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 3.5,
      "uv_index": 0.65,
      "wind_direction": 269,
      "wind_speed": 11.16,
      "temp_day_noon": -11.32,
      "temp_day_min": -12.12,
      "temp_day_max": -9.14,
      "percentprec": 91,
      "cloud_cover": 9200,
      "sunrise_time": 1679542206,
      "sunset_time": 1679587622,
      "hours_daylight": 45416,
      "humidity": 89
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 5.38,
      "uv_index": 1,
      "wind_direction": 294,
      "wind_speed": 8.82,
      "temp_day_noon": -7.82,
      "temp_day_min": -14.44,
      "temp_day_max": -6.07,
      "percentprec": 62,
      "cloud_cover": 9600,
      "sunrise_time": 1679628338,
      "sunset_time": 1679674253,
      "hours_daylight": 45915,
      "humidity": 72
    },
    {
      "icon_id": "13d",
      "icon_url": "http://openweather/icons/13d.jpg",
      "weather_title": "Snow",
      "weather_description": "snow",
      "expected_rain": -1,
      "expected_snow": 2.05,
      "uv_index": 1,
      "wind_direction": 267,
      "wind_speed": 6.37,
      "temp_day_noon": -10.47,
      "temp_day_min": -15.44,
      "temp_day_max": -9.42,
      "percentprec": 52,
      "cloud_cover": 3000,
      "sunrise_time": 1679714469,
      "sunset_time": 1679760884,
      "hours_daylight": 46415,
      "humidity": 79
    },
    {
      "icon_id": "04d",
      "icon_url": "http://openweather/icons/04d.jpg",
      "weather_title": "Clouds",
      "weather_description": "overcast clouds",
      "expected_rain": -1,
      "expected_snow": -1,
      "uv_index": 1,
      "wind_direction": 216,
      "wind_speed": 3.69,
      "temp_day_noon": -10.24,
      "temp_day_min": -16.89,
      "temp_day_max": -9.27,
      "percentprec": 0,
      "cloud_cover": 9900,
      "sunrise_time": 1679800599,
      "sunset_time": 1679847515,
      "hours_daylight": 46916,
      "humidity": 69
    }
  ],
  "percentprec": 100,
  "total_rain": -1,
  "total_snow": -1
};
describe("Test home API endpoint request", () => {
  test("GET should return correct message", async () => {

    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
  test("successfully returned an array of cities", async () => {
    // Arrange
    jest.spyOn(cityservice, "getCityList").mockResolvedValue(dummyCities);
    const res = await request(app).get("/cities");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummyCities);
  });

  test("successfully returned one day forecast", async () => {
    const addMock = jest.spyOn(oneDayService, "servGet1DayForecast");
    (
      oneDayService.servGet1DayForecast as jest.Mock
    ).mockReturnValue(dummy1DayForeCast);
    // Act
    const res = await request(app).get("/city/1?id=Kab6934");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummy1DayForeCast);
  });
  test("successfully returned five day forecast", async () => {
    const addMock = jest.spyOn(fiveDayService, "servGet5DaysForecast");
    (
      fiveDayService.servGet5DaysForecast as jest.Mock
    ).mockReturnValue(dummy5dayForecast);
    // Act
    const res = await request(app).get("/city/5?id=Kab6934");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(dummy5dayForecast);
  });
  test("successfully returned 404 when an invalid id supplied for one day forecast", async () => {
    const addMock = jest.spyOn(oneDayService, "servGet1DayForecast");
    (
      oneDayService.servGet1DayForecast as jest.Mock
    ).mockReturnValue(null);
    // Act
    const res = await request(app).get("/city/1?id=xxxx");
    // Assert
    expect(res.statusCode).toEqual(404);

  });

  test("successfully returned 404 when no id supplied for five day forecast", async () => {
    const addMock = jest.spyOn(fiveDayService, "servGet5DaysForecast");
    const res = await request(app).get("/city/5");
    // Assert
    expect(res.statusCode).toEqual(404);

  });
  test("successfully returned 404 when an invalid id supplied for one day forecast", async () => {
    (
      fiveDayService.servGet5DaysForecast as jest.Mock
    ).mockReturnValue(null);
    // Act
    const res = await request(app).get("/city/5?id=xxxx");
    // Assert
    expect(res.statusCode).toEqual(404);

  });
});
