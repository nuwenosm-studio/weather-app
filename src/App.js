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

 {/* <Search onSearchChange={handleOnSearchChange} /> */}
      {/* <CurrentWeather /> */}
      {/* {currentWeather && <CurrentWeather data={currentWeather}/>} */}

 // const handleOnSearchChange = (searchData) => {
  //   const [lat, lon] = searchData.value.split(" ");
  //   const currentWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  //   );
  //   const forecastFetch = fetch(
  //     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  //   );

  //   Promise.all([currentWeatherFetch, forecastFetch])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forecastResponse = await response[1].json();

  //       setCurrentWeather({ city: searchData.label, ...weatherResponse });
  //       setForecast({ city: searchData.label, ...forecastResponse });
  //     })
  //     .catch((err) => console.error(err));
  // };