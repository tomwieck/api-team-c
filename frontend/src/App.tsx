import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // type just for test
  //{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n'}
  interface Forecast {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  const [forecasts, setForecasts] = useState<Array<Forecast>>([]);

  //https://github.com/techreturners/lm-testing-api-calls-in-react-solution/blob/main/src/hooks/use_fetch_data.ts
  const getForecasts = async () => {
    // select city - get list cities with latitude, longitude
    // show suggest when user types - filter after every typed letter

    // London:
    // {51.5072,	-0.1275}

    const lat = "51.5072";
    const lon = "-0.1275";
    // TODO
    const url = `http://localhost:3030/api/v1/forecast/location/${lat}/${lon}`;
    console.log(url);
    const apiResponse = await fetch(url);
    const json = await apiResponse.json();
    // TODO possible show forecasts for previous selected locations
    console.log(json);
    setForecasts(json);
  };

  const handleClick = () => {
    getForecasts();
  };

  return (
    <div className="App">
      <div>Animation for loading...</div>
      <div>
        <input type="text"></input>
        <Button onClick={e => handleClick()}>Find weather</Button>
      </div>

      <div className="forecasts-container">
        {forecasts.length > 0 &&
          forecasts.map((item, index) => (
            <div key={index}>Current weather: {item.description}</div>
          ))}
      </div>
    </div>
  );
}

export default App;
