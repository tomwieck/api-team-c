import React from "react";
import { render, screen } from "@testing-library/react";
import { CityTable } from "./city_table";
import { ICityRowProps } from "../city_row/city_row";

test("display 3 rows", () => {
    const citiesData: ICityRowProps[] = [
        {
            cityName: "London",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
        {
            cityName: "Paris",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
        {
            cityName: "Nwe York",
            weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
        },
    ];
    render(<CityTable cities={citiesData} />);
    const items = screen.getAllByRole("button");
    expect(items).toHaveLength(3);
});
