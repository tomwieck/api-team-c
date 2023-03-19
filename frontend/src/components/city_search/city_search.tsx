import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

import { Counter } from "../counter/counter";

import { citiesData } from "../../dummy/dummy_cities_data";

import { City } from "../../types/city.types";
// https://github.com/sickdyd/react-search-autocomplete#readme @licence MIT
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export type Item = {
  id: number;
  city: City;
};

export interface ICitySearchProps {
  handleOnSelect: (item: City) => void;
}

export const CitySearch: React.FC<ICitySearchProps> = ({ handleOnSelect }) => {
  return (
    <div className="city-search">
      <ReactSearchAutocomplete
        items={citiesData}
        onSelect={handleOnSelect}
        autoFocus
        fuseOptions={{
          keys: ["city"],
          isCaseSensitive: false,
        }}
        resultStringKeyName="city"
        placeholder="Search for a city"
        styling={{
          border: "1px solid gray;",
          borderRadius: ".25rem",
          fontSize: "2rem",
          iconColor: "grey",
          lineColor: "rgb(232, 234, 237)",
          placeholderColor: "grey",
          clearIconMargin: "3px 14px 0 0",
          searchIconMargin: "0 0 0 16px",
        }}
      />
    </div>
  );
};
