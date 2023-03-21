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
        onClick={e => toggleActive()}
      >
        <Card.Body className="forecast-card__body">
          <p className="forecast-card__date">{forecast.date_str.toString()}</p>
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
        <Card.Footer className="forecast-card__footer">
          <span className="forecast-card__footer-humidity">
            <FontAwesomeIcon name="humidity" icon={faDroplet} />{" "}
            {forecast.humidity}%
          </span>
          <span className="forecast-card__footer-wind">
            <FontAwesomeIcon name="wind" icon={faWind} /> {forecast.wind_speed}
          </span>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ForecastDayCard;
