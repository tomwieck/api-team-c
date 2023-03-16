import React from "react";
import { Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProp {
    imgUrl: string;
}

export const WeatherIcon: React.FC<IWeatherIconProp> = ({ imgUrl }) => {
    return (
        <>
            <Image
                className="weatherIcon"
                src={imgUrl}
                style={{ height: 100, width: 100, display: "inline-block" }}
                alt={imgUrl}
            />
        </>
    );
};
