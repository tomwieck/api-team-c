import React from "react";
import { Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProp {
  iconId: string;
}

export const WeatherIcon: React.FC<IWeatherIconProp> = ({ iconId }) => {
  const className = "city-row__weather-icon--" + iconId;
  return (
    <>
      <p className={className} />
    </>
  );
};
