import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWind } from "@fortawesome/free-solid-svg-icons";

type ForecastDayCardType = {
  isActive: boolean;
  toggleActive: () => void;
};

const ForecastDayCard: React.FC<ForecastDayCardType> = ({
  isActive,
  toggleActive,
}) => {
  const forecast = {
    date_str: "Today", // 15th, 16th...
    icon_url: "10d",
    temp_day_min: "9°",
    temp_day_max: "12°",
    wind_speed: "4m/s",
    humidity: 51,
    weather_description: "broken clouds", // could be used for selected forecast card
  };

  return (
    <>
      <Card
        className={
          isActive ? "forecast-card forecast-card--active" : "forecast-card"
        }
        onClick={e => toggleActive()}
      >
        <Card.Body>
          <p>{forecast.date_str}</p>
          <div className="forecast-card__content">
            <div>
              <img src={forecast.icon_url} alt="" />
            </div>
            <div className="forecast-card__temperatures">
              <div>{forecast.temp_day_min}</div>
              <div>{forecast.temp_day_max}</div>
            </div>
            {isActive && (
              <div className="forecast-card__description">
                {forecast.weather_description}
              </div>
            )}
          </div>
        </Card.Body>
        <Card.Footer>
          humidity {forecast.humidity} |{" "}
          <FontAwesomeIcon name="wind" icon={faWind} key="icon" />{" "}
          {forecast.wind_speed}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ForecastDayCard;

// from backend api:
// main	string	main weather description
// detail	string	detailed weather description
// icon_id	string	e.g. 10d
// icon_url	string	e.g. http://openweather/icons/10d.jpg
// hours_daylight	number	number of hours of daylight
// uv_index	number	UV index
// wind_speed	number	in knots
// temp_day	number	temperature in degrees C
// percentprec	number	% chance of rain/snpw
// expected_snow	number	mm of snow expected
// expected_rain	number	mm of rain expected
// air_quality	number	air quality index

// from backend:
// interface ForecastForADay {
//   main: string;
//   detail: string;
//   icon_id: string;
//   icon_url: string;
//   hours_daylight: number;
//   // uv_index: number;
//   wind_speed: number;
//   temp_day: number;
//   percentprec: number;
//   expected_snow: number;
//   expected_rain: number;
//   air_quality: number;
// }

// data from https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&units=metric&appid=f87a1b9668af7878780bb6d1fd3bc802
// "daily":
// [
//   {
//     dt: 1678903200,
//     sunrise: 1678883214,
//     sunset: 1678926208,
//     moonrise: 1678866960,
//     moonset: 1678901760,
//     moon_phase: 0.77,
//     temp: {
//       day: 12.89,
//       min: 3.42,
//       max: 16.18,
//       night: 9.79,
//       eve: 13.01,
//       morn: 3.69,
//     },
//     feels_like: {
//       day: 11.57,
//       night: 7.73,
//       eve: 12.06,
//       morn: 1.42,
//     },
//     pressure: 1025,
//     humidity: 51,
//     dew_point: 3.17,
//     wind_speed: 4.64,
//     wind_deg: 157,
//     wind_gust: 13.15,
//     weather: [
//       {
//         id: 803,
//         main: "Clouds",
//         description: "broken clouds",
//         icon: "04d",
//       },
//     ],
//     clouds: 55,
//     pop: 0,
//     uvi: 6.84,
//   },
// ];
