import ForecastDayCard from "./forecast_day_card";
import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import { IForecast } from "../../types/forecast_frontend.types";

interface ICityForecastProps {
  cityName: string;
  forecasts: IForecast[];
  toggleRow(): void;
}

const CityForecast: React.FC<ICityForecastProps> = ({
  cityName,
  forecasts,
  toggleRow,
}) => {
  const [activeCard, setActiveCard] = useState(0);

  const updateActiveCard = (index: number) => {
    setActiveCard(index);
  };

  return (
    <>
      <Row className="city-row">
        <Col>
          <h3
            className="city-row__city-name--forecast"
            onClick={(e) => toggleRow()}
          >
            {cityName}
          </h3>
          <div className="forecast-day-container">
            {cityName &&
              forecasts.map((forecast, index) => (
                <ForecastDayCard
                  key={"city_forecast_" + index}
                  forecast={forecast}
                  isActive={index === activeCard}
                  toggleActive={() => updateActiveCard(index)}
                />
              ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CityForecast;
