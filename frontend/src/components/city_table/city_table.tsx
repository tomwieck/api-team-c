import React, { useState } from "react";

import { CityRow } from "../city_row/city_row";
import { ICityRowProps } from "../city_row/city_row";
import CityForecast from "../city_forecast/city_forecast";

import { cities } from "../../dummy/dummy_data";

export interface ICityTableProps {
    cities: ICityRowProps[];
}

export interface IForecast {
    date_str: string;
    icon_id: string;
    temp_day_min: string;
    temp_day_max: string;
    wind_speed: string;
    humidity: number;
    weather_description: string;
}

export interface IIsOpen {
    [key: number]: boolean;
}

export const CityTable: React.FC = () => {
    const toggleRow = (index: number) => {
        const newRowOpen = { ...rowOpen };
        newRowOpen[index] = !newRowOpen[index];
        setRowOpen(newRowOpen);
    };
    const [rowOpen, setRowOpen] = useState<IIsOpen>({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });
    return (
        <div className="city-table col">
            {cities.map((city, index) => (
                <>
                    <CityRow
                        key={index}
                        {...city}
                        toggleRow={() => toggleRow(index)}
                    />
                    <CityForecast />
                </>
            ))}
        </div>
    );
};
