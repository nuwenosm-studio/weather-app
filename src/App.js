import { useState } from "react";
import "./styles.css";
import WeatherForm from "./components/WeatherForm";
import WeatherLists from "./components/WeatherLists";

function App() {
  const [cities, setCities] = useState([]);

  return (
    <div className="weather_app">
      <div className="app_info">
        <div className="app_title">weather-app</div>
        <div className="app_rule">
          Please provide the city's name and 
          its corresponding country code to 
          retrieve the weather information.<br/>
          Example: San Francisco, US
        </div>
      </div>
      <WeatherForm cities={cities} setCities={setCities}/>
      <WeatherLists cities={cities} setCities={setCities}/>
    </div>
  );
}

export default App;