import { WEATHER_API_URL, WEATHER_API_KEY } from "../data/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const WeatherForm = ({cities, setCities}) => {
  const [city, setCity] = useState("");

  const handleSearchChange = (e) => {
    setCity(e.target.value);
  };

  const passData = (city) => {
    const WEATHER_URL = `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    let cityData = {};

    axios
      .get(WEATHER_URL)
      .then((res) => {
        if (res.data.cod === "404") {
          throw new Error("City not found");
        } else {
          cityData = {
            name: res.data.name,
            country: res.data.sys.country,
            description: res.data.weather[0].description,
            icon: res.data.weather[0].icon,
            temp: Math.round(res.data.main.temp),
            tempHigh: Math.round(res.data.main.temp_max),
            tempLow: Math.round(res.data.main.temp_min),
            lat: res.data.coord.lat,
            lon: res.data.coord.lon
          };
          const WEATHER_FORECAST_URL = `${WEATHER_API_URL}/forecast?lat=${cityData.lat}&lon=${cityData.lon}&appid=${WEATHER_API_KEY}&units=metric`;
          return axios.get(WEATHER_FORECAST_URL);
        }
      })
      .then((res) => {
        const forecastData = res.data.list;
        cityData.forecastData = forecastData;
        setCities((prevCities) => [...prevCities, cityData]);
        // console.log(cityData);
      })
      .catch((err) => {
        console.error(err);
        alert("City not found");
      });
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (city.trim() !== "") {
        passData(city);
      }
      setCity("");
    }
  };

  return (
    <div className="weather_form">
      <div className="search_icon">
        <BsSearch />
      </div>

      <input
        id="weather_input"
        type="text"
        placeholder="Enter a city name, country code..."
        value={city}
        onKeyDown={handleKeyPress}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default WeatherForm;