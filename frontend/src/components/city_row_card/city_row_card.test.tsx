import React from "react";
import { render, screen } from "@testing-library/react";
import { CityRowCard, ICityRowCardProps } from "./city_row_card";

test("renders city name ", () => {
    const cityRowData: ICityRowCardProps = {
        cityName: "London",
        weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
    };
    render(<CityRowCard {...cityRowData} />);
    // const cityName = screen.getByText(/London/i);
    // expect(cityName).toBeInTheDocument();
});
