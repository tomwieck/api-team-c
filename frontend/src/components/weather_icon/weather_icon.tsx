import React from "react";
import { Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProp {
    imgUrl: string;
}

export const WeatherIcon: React.FC<IWeatherIconProp> = ({ imgUrl }) => {
    const className = "city-row__weather-icon--" + imgUrl;
    return (
        <>
            <p
                className={className}
                // src={imgUrl}
                // alt={imgUrl}
            />
        </>
    );
};
