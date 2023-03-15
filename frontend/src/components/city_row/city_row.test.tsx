import React from "react";
import { render, screen } from "@testing-library/react";
import { CityRow, ICityRowProps } from "./city_row";

test("renders city name ", () => {
    const cityRowData: ICityRowProps = {
        cityName: "London",
        weatherIcons: ["windy", "sunny"],
    };
    render(<CityRow {...cityRowData} />);
    const cityName = screen.getByText(/London/i);
    expect(cityName).toBeInTheDocument();
});
