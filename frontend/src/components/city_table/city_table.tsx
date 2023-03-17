import React, { useState } from "react";

import { CityRow } from "../city_row/city_row";
import CityForecast from "../city_forecast/city_forecast";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { IForecast } from "../city_forecast/forecast_day_card";
import { cities } from "../../dummy/dummy_data";

export interface ICityProps {
    cityName: string;
    weatherIcons: IWeatherIconProp[];
    forecasts: IForecast[];
    toggleRow(): void;
}
export interface ICityTableProps {
    cities: ICityProps[];
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
                    <CityForecast
                        key={index}
                        {...city}
                        toggleRow={() => toggleRow(index)}
                    />
                </>
            ))}
        </div>
    );
};
