import React from "react";
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
