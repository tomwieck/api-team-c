import React, { useState } from "react";
import { Fade } from "react-bootstrap";

import { CityRow } from "../city_row/city_row";
import CityForecast from "../city_forecast/city_forecast";

import { cities } from "../../dummy/dummy_data";

import { useFetchData } from "../../hooks/use_fetch_data";
// import { IForecastCity } from "../../types/forecast_frontend.types";

import { ApiDaily } from "../../types/forecast_backend.types";
import { API_CITY_FORECAST_FOR_5_DAYS } from "../../config/config";
import { IForecastCity } from "../../types/forecast_frontend.types";

const processData = (data: ApiDaily | undefined) => {
  console.log(data);
  return [];
};

interface IIsOpen {
  [key: number]: boolean;
}

export const CityTable: React.FC = () => {
  const dummyDataLoad = (dummyData: IForecastCity[]) => {
    dummyData.map((city) => addRow(city));
  };

  const toggleRow = (index: number) => {
    const newRowOpen = { ...rowOpen };
    newRowOpen[index] = !newRowOpen[index];
    setRowOpen(newRowOpen);
  };
  const deleteRow = (index: number) => {
    const updatedRowOpen = { ...rowOpen };
    updatedRowOpen[index] = false;
    setRowOpen(updatedRowOpen);
    const updatedRows = cityRows.filter((row, idx) => {
      return index !== idx;
    });
    setCityRows(updatedRows);
  };

  const addRow = (apiData: IForecastCity) => {
    if (
      cityRows.length < 5 &&
      cityRows.filter((cr) => cr.cityName === apiData.cityName).length === 0
    ) {
      setCityRows((cityRows) => [...cityRows, apiData]);
      setIsFull(false);
    } else setIsFull(true);
  };

  const [rowOpen, setRowOpen] = useState<IIsOpen>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // const cityId = "Lon-151";
  const cityId = "Kab6934";

  const url = `${API_CITY_FORECAST_FOR_5_DAYS}?id=${cityId}`;
  console.log("Getting", url);

  const { data, error, isFetching, status } = useFetchData<
    ApiDaily | undefined
  >(url);

  console.log(data);
  // const res = processData(data);

  const [cityRows, setCityRows] = useState<IForecastCity[]>([]);

  const [isFull, setIsFull] = useState<boolean>(false);

  if (!isFull) dummyDataLoad(cities);
  return (
    <div className="city-table col">
      {cityRows.map((city, index) => (
        <React.Fragment key={"city_table_" + index}>
          {!rowOpen[index] && (
            <Fade in={!rowOpen[index]}>
              <CityRow
                key={"city_row_" + index}
                {...city}
                toggleRow={() => toggleRow(index)}
                deleteRow={() => deleteRow(index)}
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
