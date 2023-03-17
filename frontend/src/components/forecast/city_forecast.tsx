import ForecastDayCard from "./ForecastDayCard";
import { useState } from "react";
import { cities } from "../../dummy/dummy_data";

const ForecastCity: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  // hardcode
  const cityName = "London";
  // dummy data
  const cityWeather = cities.find(city => city.cityName === cityName);

  const updateActiveCard = (index: number) => {
    setActiveCard(index);
  };

  return (
    <>
      <div className="mt-40">
        <h3 className="city">{cityName}</h3>
        <div className="forecast-day-container">
          {cityWeather &&
            cityWeather.forecasts.map((forecast, index) => (
              <ForecastDayCard
                forecast={forecast}
                isActive={index === activeCard}
                toggleActive={() => updateActiveCard(index)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ForecastCity;
