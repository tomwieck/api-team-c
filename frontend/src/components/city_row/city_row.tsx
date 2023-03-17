import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IForecast } from "../city_table/city_table";

export interface ICityRowProps {
    cityName: string;
    weatherIcons: IWeatherIconProp[];
    id: number;
    forecasts: IForecast[];
    toggleRow(e: React.MouseEvent): void;
}

export const CityRow: React.FC<ICityRowProps> = ({
    cityName,
    weatherIcons,
    forecasts,
    toggleRow,
}) => {
    return (
        <Row
            className="city-row"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                toggleRow(e)
            }
        >
            <Col className="col-3">
                <h3 className="city-row__city-name">{cityName}</h3>
            </Col>
            <Col className="col-8">
                <WeatherIconRow weatherIcons={weatherIcons} />
            </Col>
            <Col className="col-1">
                <Button />
            </Col>
        </Row>
    );
};
