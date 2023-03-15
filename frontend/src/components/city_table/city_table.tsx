import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { Counter } from "../counter/counter";
import { CityRow } from "../city_row/city_row";
import { ICityRowProps } from "../city_row/city_row";
import { ICityRowCardProps } from "../city_row_card/city_row_card";

export interface ICityTableProps {
    cities: ICityRowCardProps[];
}
export const CityTable: React.FC<ICityTableProps> = (cities) => {
    // const cityRowData: ICityRowProps = {
    //     cities,
    // };
    return (
        <>
            City Table
            {cities.map(
                (city) => city
                // <CityRow {...city} />
            )}
        </>
    );
};
