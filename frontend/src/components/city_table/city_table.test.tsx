import React from "react";
import { render, screen } from "@testing-library/react";
import { CityTable } from "./city_table";
test("display 3 rows", () => {
  //   const citiesData: ICityProps[] = [
  //     {
  //       cityName: "London",
  //       weatherIcons: [{ imgId: "windy" }, { imgId: "sunny" }],
  //       forecasts: [
  //         {
  //           date_str: "Today", // 15th, 16th...
  //           icon_id: "10d",
  //           temp_day_min: "9°",
  //           temp_day_max: "12°",
  //           wind_speed: "4m/s",
  //           humidity: 51,
  //           weather_description: "broken clouds", // could be used for selected forecast card
  //         },
  //       ],
  //     },
  //     {
  //       cityName: "Paris",
  //       weatherIcons: [{ imgId: "windy" }, { imgId: "sunny" }],
  //       forecasts: [
  //         {
  //           date_str: "Today", // 15th, 16th...
  //           icon_id: "10d",
  //           temp_day_min: "9°",
  //           temp_day_max: "12°",
  //           wind_speed: "4m/s",
  //           humidity: 51,
  //           weather_description: "broken clouds", // could be used for selected forecast card
  //         },
  //       ],
  //     },
  //     {
  //       cityName: "Nwe York",
  //       weatherIcons: [{ imgId: "windy" }, { imgId: "sunny" }],
  //       forecasts: [
  //         {
  //           date_str: "Today", // 15th, 16th...
  //           icon_id: "10d",
  //           temp_day_min: "9°",
  //           temp_day_max: "12°",
  //           wind_speed: "4m/s",
  //           humidity: 51,
  //           weather_description: "broken clouds", // could be used for selected forecast card
  //         },
  //       ],
  //     },
  //   ];
  // render(<CityTable />);
  // const items = screen.getAllByRole("button");
  // expect(items).toHaveLength(3);
});
