import React from "react";
import { Row } from "react-bootstrap";
import { IWeatherIconProp, WeatherIcon } from "../weather_icon/weather_icon";

export interface IWeatherIconRowProps {
    weatherIcons: IWeatherIconProp[];
}

export const WeatherIconRow: React.FC<IWeatherIconRowProps> = ({
    weatherIcons,
}) => {
    return (
        <>
            {weatherIcons.map((i, index) => (
                <WeatherIcon key={index} {...i} />
            ))}
        </>
    );
};
