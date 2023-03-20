import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherIconRow } from "./weather_icon_row";
import { IWeatherIconRowProps } from "./weather_icon_row";

test("renders input placeholder text", () => {
  const weatherIconRowData: IWeatherIconRowProps = {
    weatherIcons: [
      { iconId: "sunny" },
      { iconId: "windy" },
      { iconId: "rainy" },
    ],
  };
  render(<WeatherIconRow {...weatherIconRowData} />);
});
