import React, { useState } from "react";
import { Col } from "react-bootstrap";

import { Counter } from "../counter/counter";
import { CityRow } from "../city_row/city_row";
import { ICityRowProps } from "../city_row/city_row";

import { cities } from "../../dummy/dummy_data";

export interface ICityTableProps {
    cities: ICityRowProps[];
    forecasts: IForecast[];
}

export interface IForecast {
    date_str: string;
    icon_url: string;
    temp_day_min: string;
    temp_day_max: string;
    wind_speed: string;
    humidity: number;
    weather_description: string;
}

export interface IIsOpen {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
}

export const CityTable: React.FC = () => {
    const [open, setOpen]: IIsOpen = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    };
    return (
        <div className="city-table col">
            {cities.map((city, index) => (
                <CityRow key={index} {...city} onClick={setOpen(!open)} />
            ))}
        </div>
    );
};
