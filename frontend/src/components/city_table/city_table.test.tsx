import React from "react";
import { render, screen } from "@testing-library/react";
import { CityTable } from "./city_table";

test("renders input placeholder text", () => {
    const citiesData: ICityRowCardProps[] = [
        {
            cityName: "London",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
        {
            cityName: "London",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
        {
            cityName: "London",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
    ];
    render(<CityTable />);
    const placeholder = screen.getByText(/City Table/i);
    expect(placeholder).toBeInTheDocument();
});
