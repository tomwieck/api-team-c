import React from "react";
import { Row, Col } from "react-bootstrap";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IForecast } from "../../types/forecast_frontend.types";
import { IWeatherIconProp } from "../weather_icon/weather_icon";

export interface ICityRowProps {
  cityName: string;
  weatherIcons: IWeatherIconProp[];
  forecasts: IForecast[];
  toggleRow(): void;
}

export const CityRow: React.FC<ICityRowProps> = ({
  cityName,
  weatherIcons,
  toggleRow,
}) => {
  return (
    <Row className="city-row" onClick={e => toggleRow()}>
      <Col className="col-3">
        <h3 className="city-row__city-name">{cityName}</h3>
      </Col>
      <Col className="col-9">
        <WeatherIconRow weatherIcons={weatherIcons} />
      </Col>
    </Row>
  );
};
