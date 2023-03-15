import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProp {
    imgUrl: string;
}

export const WeatherIcon: React.FC<IWeatherIconProp> = ({ imgUrl }) => {
    return (
        <>
            <img src={imgUrl} />
        </>
    );
};
