import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { Counter } from "../counter/counter";

export const CitySearch: React.FC = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Enter City" />
                <InputGroup.Text>
                    <Counter />
                </InputGroup.Text>
            </InputGroup>
            {/* <input className="w-100" type="text" placeholder="Enter City" /> */}
        </>
    );
};
