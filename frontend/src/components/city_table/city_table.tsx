import React, { useState, useEffect } from "react";
import { Alert, Fade } from "react-bootstrap";

import { CityRow } from "../city_row/city_row";
import CityForecast from "../city_forecast/city_forecast";
import { CitySearch } from "../city_search/city_search";

import { get_city_data } from "../../helpers/get_city_data";

import { IForecastCity } from "../../types/forecast_frontend.types";
import { City } from "../../types/city.types";

import { isError } from "../../utils/type_guards";

import {
  API_CITY_FORECAST_FOR_5_DAYS,
  API_CITIES_URL,
} from "../../config/config";

interface IIsOpen {
  [key: number]: boolean;
}

export const CityTable: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [cityRows, setCityRows] = useState<IForecastCity[]>([]);
  const [cityId, setCityId] = useState<string>();
  const [country, setCountry] = useState<string>("");
  const [citiesData, setcitiesData] = useState<City[]>();
  const [error, setError] = useState("");
  // 5 cities max
  const [isFull, setIsFull] = useState<boolean>(false);
  const [rowOpen, setRowOpen] = useState<IIsOpen>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

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
    setCityId("");
    // To do, state isnt updated instantly so requires a fix
    if (cityRows.length < 5) setIsFull(false);
    setSearchString("");
  };

  const addRow = (apiData: IForecastCity) => {
    if (
      cityRows.length < 5 &&
      cityRows.filter(cr => cr.cityName === apiData.cityName).length === 0
    ) {
      setCityRows(cityRows => [...cityRows, apiData]);
      setIsFull(false);
    } else if (cityRows.length === 5) {
      setIsFull(true);
      setSearchString("Limit 5 Cities Reached");
    }
  };

  const clearError = () => {
    setError("");
  };

  const handleOnSelect = (item: City) => {
    setError("");
    setCityId(item.id);
    setCountry(item.country);
    setSearchString("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_CITY_FORECAST_FOR_5_DAYS}?id=${cityId}`;

      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const json = await response.json();
          // TODO refactor
          const res = get_city_data(json);
          if (res) addRow(res);
        } else {
          throw new Error(`${response.status}`);
        }
      } catch (e: unknown) {
        if (isError(e)) {
          setError(e.message);
        }
      }
    };
    if (cityId) {
      fetchData();
    }
  }, [cityId]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API_CITIES_URL}`;

      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const json = await response.json();
          // TODO refactor
          if (json) setcitiesData(json);
        }
      } catch (e: unknown) {
        //   setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="city-table col">
      <CitySearch
        citiesData={citiesData}
        disabled={isFull}
        searchString={searchString}
        handleOnSelect={handleOnSelect}
        clearError={clearError}
      />
      {error && (
        <Alert key="warning" variant="warning">
          There are some problems with getting the forecast for that city,
          please try another
        </Alert>
      )}
      {cityRows.map((city, index) => (
        <React.Fragment key={"city_table_" + index}>
          {!rowOpen[index] && (
            <Fade in={!rowOpen[index]}>
              <CityRow
                key={"city_row_" + index}
                {...city}
                country={country}
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
