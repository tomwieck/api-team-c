import React, { useState } from "react";
import { Fade } from "react-bootstrap";

import { CityRow } from "../city_row/city_row";
import CityForecast from "../city_forecast/city_forecast";

import { IForecastCity } from "../../types/forecast_frontend.types";
interface IIsOpen {
  [key: number]: boolean;
}
interface ICityTableProps {
  cityForecasts: IForecastCity[];
}
export const CityTable: React.FC<ICityTableProps> = ({ cityForecasts }) => {
  const toggleRow = (index: number) => {
    console.log(index);

    const newRowOpen = { ...rowOpen };
    newRowOpen[index] = !newRowOpen[index];
    setRowOpen(newRowOpen);
  };
  const [rowOpen, setRowOpen] = useState<IIsOpen>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  return (
    <div className="city-table col">
      {cityForecasts.length !== 0 &&
        cityForecasts.map((city, index) => (
          <React.Fragment key={"city_table_" + index}>
            {!rowOpen[index] && (
              <Fade in={!rowOpen[index]}>
                <CityRow
                  key={"city_row_" + index}
                  {...city}
                  toggleRow={() => toggleRow(index)}
                />
              </Fade>
            )}
            {rowOpen[index] && (
              <Fade in={rowOpen[index]}>
                <CityForecast {...city} toggleRow={() => toggleRow(index)} />
              </Fade>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};
