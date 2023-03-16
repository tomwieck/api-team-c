import React, { useState } from "react";
import { Col } from "react-bootstrap";

import { Counter } from "../counter/counter";
import { CityRow } from "../city_row/city_row";
import { ICityRowProps } from "../city_row/city_row";

export interface ICityTableProps {
    cities: ICityRowProps[];
}
export const CityTable: React.FC<ICityTableProps> = ({ cities }) => {
    return (
        <div className="city-table col">
            {cities.map((city, index) => (
                <CityRow key={index} {...city} />
            ))}
        </div>
    );
};
