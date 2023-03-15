import ForecastDayCard from "./ForecastDayCard";

const ForecastCity: React.FC = () => {
  const cityName = "London";

  return (
    <>
      <div className="mt-40">
        <h3 className="city">{cityName}</h3>
        <div className="forecast-day-container">
          <ForecastDayCard />
          <ForecastDayCard />
          <ForecastDayCard />
          <ForecastDayCard />
          <ForecastDayCard />
        </div>
      </div>
    </>
  );
};

export default ForecastCity;
