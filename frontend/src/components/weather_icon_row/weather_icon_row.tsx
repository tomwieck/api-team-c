import React from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IWeatherIconProp } from "../weather_icon/weather_icon";

interface IWeatherIconRowProps {
    icons: IWeatherIconProp[];
}

export const WeatherIconRow: React.FC<IWeatherIconRowProps> = ({ icons }) => {
    return (
        <Row>
            {icons.map((i) => (
                <img src={i.imgUrl} />
            ))}
        </Row>
    );
};
