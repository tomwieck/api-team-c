import React from "react";
import { Form, InputGroup } from "react-bootstrap";

import { Counter } from "../counter/counter";

export const CitySearch: React.FC = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <Counter />
                </InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
            </InputGroup>
            <input className="w-100" type="text" placeholder="Enter City" />
        </>
    );
};
