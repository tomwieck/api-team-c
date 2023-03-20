import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IWeatherIconProp } from "../weather_icon/weather_icon";

import { IForecast } from "../../types/forecast_frontend.types";

export interface ICityRowProps {
  cityName: string;
  country: string;
  weatherIcons: IWeatherIconProp[];
  forecasts: IForecast[];
  toggleRow(): void;
  deleteRow(): void;
}

export const CityRow: React.FC<ICityRowProps> = ({
  cityName,
  country,
  weatherIcons,
  toggleRow,
  deleteRow,
}) => {
  return (
    <div className="city-row" onClick={e => toggleRow()}>
      <Col className="col-3">
        <h3 className="city-row__city-name">
          {cityName}
          <br />
          <span className="city-row__country">{country}</span>
        </h3>
      </Col>
      <Col className="col-8 city-row__weather">
        <WeatherIconRow weatherIcons={weatherIcons} />
      </Col>
      <Col className="col-1">
        <Button className="city-row__delete-button" onClick={() => deleteRow()}>
          <FontAwesomeIcon name="delete" icon={faTrash} />
        </Button>
      </Col>
    </div>
  );
};
