import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

test("renders input placeholder text", () => {
    render(<Counter />);
    const placeholder = screen.getByText(/Counter/i);
    expect(placeholder).toBeInTheDocument();
});
