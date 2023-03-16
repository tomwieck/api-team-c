import React from "react";
import { Row, Col } from "react-bootstrap";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";

export interface ICityRowProps {
    cityName: string;
    weatherIcons: IWeatherIconProp[];
}

export const CityRow: React.FC<ICityRowProps> = ({
    cityName,
    weatherIcons,
}) => {
    return (
        <Row className="city-row">
            <Col className="col-3">
                <h3 className="city-row__city-name">{cityName}</h3>
            </Col>
            <Col className="col-9">
                <WeatherIconRow weatherIcons={weatherIcons} />
            </Col>
        </Row>
    );
};
