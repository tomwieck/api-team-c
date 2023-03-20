import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

import { Counter } from "../counter/counter";

import { City } from "../../types/city.types";
// https://github.com/sickdyd/react-search-autocomplete#readme @licence MIT
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export type Item = {
  id: number;
  city: City;
};

export interface ICitySearchProps {
  handleOnSelect: (item: City) => void;
  citiesData: City[] | undefined;
  disabled: boolean;
  searchString: string;
}

export const CitySearch: React.FC<ICitySearchProps> = ({
  handleOnSelect,
  citiesData,
  disabled,
  searchString,
}) => {
  return (
    <div
      className="city-search"
      style={disabled ? { pointerEvents: "none", opacity: 0.3 } : {}}
    >
      <ReactSearchAutocomplete
        items={citiesData as City[]}
        onSelect={handleOnSelect}
        autoFocus
        fuseOptions={{
          keys: ["city"],
          isCaseSensitive: false,
        }}
        resultStringKeyName="longName"
        inputSearchString={searchString}
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
