import React from "react";
import { Form, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProp {
  imgId: string;
}

export const WeatherIcon: React.FC<IWeatherIconProp> = ({ imgId }) => {
  const className = "city-row__weather-icon--" + imgId;
  return (
    <>
      <p className={className} />
    </>
  );
};
