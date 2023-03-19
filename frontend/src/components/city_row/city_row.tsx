import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IForecast } from "../../types/forecast_frontend.types";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export interface ICityRowProps {
  cityName: string;
  weatherIcons: IWeatherIconProp[];
  forecasts: IForecast[];
  toggleRow(): void;
  deleteRow(): void;
}

export const CityRow: React.FC<ICityRowProps> = ({
  cityName,
  weatherIcons,
  toggleRow,
  deleteRow,
}) => {
  return (
    <Row className="city-row">
      <Col className="col-3">
        <h3 className="city-row__city-name" onClick={(e) => toggleRow()}>
          {cityName}
        </h3>
      </Col>
      <Col className="col-8">
        <WeatherIconRow weatherIcons={weatherIcons} />
      </Col>
      <Col className="col-1">
        <Button className="city-row__delete-button" onClick={() => deleteRow()}>
          <FontAwesomeIcon name="wind" icon={faTrash} />
        </Button>
      </Col>
    </Row>
  );
};
