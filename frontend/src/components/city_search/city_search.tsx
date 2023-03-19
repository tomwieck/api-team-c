import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

import { Counter } from "../counter/counter";

import { citiesData } from "../../dummy/dummy_cities_data";

import { City } from "../../types/city.types";
// https://github.com/sickdyd/react-search-autocomplete#readme @licence MIT
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type Item = {
  id: number;
  city: City;
};

export const CitySearch: React.FC = () => {
  const [selected, setSelected] = useState<City>();

  const handleOnSearch = (sting: string, results: City[]) => {
    // onSearch will have as the first callback parameter
    // the strings searched and for the second the results.
    console.log(sting, results);
  };

  const handleOnHover = (result: City) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: City) => {
    // the item selected
    console.log(item);
    setSelected(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div className="city-search">
      <ReactSearchAutocomplete
        items={citiesData}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
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
