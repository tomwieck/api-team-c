import { render, } from "@testing-library/react";
import { WeatherIcon } from "./weather_icon";
import { IWeatherIconProp } from "./weather_icon";
test("renders input placeholder text", () => {
  const weatherIconData: IWeatherIconProp = {
    iconId: "sunny",
  };
  render(<WeatherIcon {...weatherIconData} />);
});
