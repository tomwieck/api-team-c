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

export const CityTable: React.FC = () => {
    return (
        <div className="city-table col">
            {cities.map((city, index) => (
                <CityRow key={index} {...city} />
            ))}
        </div>
    );
};
