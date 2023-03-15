import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { Counter } from "../counter/counter";
import { CityRow } from "../city_row/city_row";
import { ICityRowProps } from "../city_row/city_row";
export const CityTable: React.FC = () => {
    const cityRowData: ICityRowProps = {
        cityName: "London",
        weatherIcons: ["windy", "sunny"],
    };
    return (
        <>
            City Table
            <CityRow {...cityRowData} />
        </>
    );
};
