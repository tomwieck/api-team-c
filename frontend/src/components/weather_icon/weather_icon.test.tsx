import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "./weather_icon";
import { IWeatherIconProp } from "./weather_icon";
test("renders input placeholder text", () => {
  const weatherIconData: IWeatherIconProp = {
    imgId: "sunny",
  };
  render(<WeatherIcon {...weatherIconData} />);
  // const placeholder = screen.getByText(/Counter/i);
  // expect(placeholder).toBeInTheDocument();
});
