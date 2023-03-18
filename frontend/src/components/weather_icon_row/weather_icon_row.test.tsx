import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherIconRow } from "./weather_icon_row";
import { IWeatherIconRowProps } from "./weather_icon_row";

test("renders input placeholder text", () => {
    const weatherIconRowData: IWeatherIconRowProps = {
        weatherIcons: [
            { imgUrl: "sunny" },
            { imgUrl: "windy" },
            { imgUrl: "rainy" },
        ],
    };
    render(<WeatherIconRow {...weatherIconRowData} />);
    // const placeholder = screen.getByText(/Counter/i);
    // expect(placeholder).toBeInTheDocument();
});
