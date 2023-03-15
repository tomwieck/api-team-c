import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

export interface ICityRowProps {
    cityName: string;
    weatherIcons: string[];
}

export const CityRow: React.FC<ICityRowProps> = ({
    cityName,
    weatherIcons,
}) => {
    return (
        <Row>
            <p>{cityName}</p>
            {weatherIcons.map((wi) => wi + ".png")}
        </Row>
    );
};
