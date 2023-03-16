import ForecastDayCard from "./ForecastDayCard";
import { useState } from "react";

const ForecastCity: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cityName = "London";

  const updateActiveCard = (index: number) => {
    setActiveCard(index);
  };

  return (
    <>
      <div className="mt-40">
        <h3 className="city">{cityName}</h3>
        <div className="forecast-day-container">
          {/* hardcoded index */}
          <ForecastDayCard
            isActive={0 === activeCard}
            toggleActive={() => updateActiveCard(0)}
          />
          <ForecastDayCard
            isActive={1 === activeCard}
            toggleActive={() => updateActiveCard(1)}
          />
          <ForecastDayCard
            isActive={2 === activeCard}
            toggleActive={() => updateActiveCard(2)}
          />
          <ForecastDayCard
            isActive={3 === activeCard}
            toggleActive={() => updateActiveCard(3)}
          />
          <ForecastDayCard
            isActive={4 === activeCard}
            toggleActive={() => updateActiveCard(4)}
          />
        </div>
      </div>
    </>
  );
};

export default ForecastCity;
