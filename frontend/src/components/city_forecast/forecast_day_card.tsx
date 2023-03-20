import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";

import { IForecast } from "../../types/forecast_frontend.types";

type ForecastDayCardProps = {
  forecast: IForecast;
  isActive: boolean;
  toggleActive: () => void;
};

const ForecastDayCard: React.FC<ForecastDayCardProps> = ({
  forecast,
  isActive,
  toggleActive,
}) => {
  const iconClassName = `city-row__weather-icon--${forecast.icon_id}`;

  return (
    <>
      <Card
        className={
          isActive ? "forecast-card forecast-card--active" : "forecast-card"
        }
        onClick={(e) => toggleActive()}
      >
        <Card.Body>
          <p>{forecast.date_str.toString()}</p>
          <div className="forecast-card__content">
            <div className="forecast-card__icon-wrapper">
              <i className={iconClassName}></i>
            </div>
            <div className="forecast-card__temperatures">
              <div className="forecast-card__max-temperature">
                {forecast.temp_day_max}
              </div>
              <div>{forecast.temp_day_min}</div>
            </div>
            {isActive && (
              <div className="forecast-card__description">
                {forecast.weather_description}
              </div>
            )}
          </div>
        </Card.Body>
        <Card.Footer>
          <FontAwesomeIcon name="humidity" icon={faDroplet} />{" "}
          {forecast.humidity}% | <FontAwesomeIcon name="wind" icon={faWind} />{" "}
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
