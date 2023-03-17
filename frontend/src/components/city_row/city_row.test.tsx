import React from "react";
import { render, screen } from "@testing-library/react";
import { CityRow } from "./city_row";
import { ICityProps } from "../city_table/city_table";
test("renders city name ", () => {
    // const cityRowData: ICityProps = {
    //   cityName: "London",
    //   weatherIcons: [{ imgUrl: "windy" }, { imgUrl: "sunny" }],
    //   forecasts: [
    //     {
    //       date_str: "Today", // 15th, 16th...
    //       icon_id: `10d`,
    //       temp_day_min: "9°",
    //       temp_day_max: "12°",
    //       wind_speed: "4m/s",
    //       humidity: 51,
    //       weather_description: "broken clouds", // could be used for selected forecast card
    //     },
    //   ],
    // };
    // render(<CityRow {...cityRowData} />);
    // const cityName = screen.getByText(/London/i);
    // expect(cityName).toBeInTheDocument();
});
