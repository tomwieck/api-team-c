import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page h1 content", () => {
    render(<App />);
    const heading = screen.getByText(
        /Compare the weather for the next 5 days/i
    );
    expect(heading).toBeInTheDocument();
});
