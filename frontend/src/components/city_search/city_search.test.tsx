import React from "react";
import { render, screen } from "@testing-library/react";
import { CitySearch } from "./city_search";

test("renders input placeholder text", () => {
    render(<CitySearch />);
    const placeholder = screen.queryByPlaceholderText(/Enter City/i);
    expect(placeholder).toBeInTheDocument();
});
