import ForecastDayCard from "./forecast_day_card";
import { useState } from "react";
import { cities } from "../../dummy/dummy_data";
import { ICityProps } from "../city_table/city_table";
import { Row } from "react-bootstrap";

const CityForecast: React.FC<ICityProps> = ({
    cityName,
    forecasts,
    toggleRow,
}) => {
    const [activeCard, setActiveCard] = useState(0);

    const updateActiveCard = (index: number) => {
        setActiveCard(index);
    };

    return (
        <>
            <Row className="city-row gx-2">
                <h3 className="city">{cityName}</h3>
                <div className="forecast-day-container">
                    {cityName &&
                        forecasts.map((forecast, index) => (
                            <ForecastDayCard
                                // key={city.cityName + index}
                                forecast={forecast}
                                isActive={index === activeCard}
                                toggleActive={() => updateActiveCard(index)}
                            />
                        ))}
                </div>
            </Row>
        </>
    );
};

export default CityForecast;
