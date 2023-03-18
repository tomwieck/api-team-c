import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Counter: React.FC = () => {
    return (
        <>
            <FontAwesomeIcon name="check" icon={faSearch} key="icon" />
        </>
    );
};
