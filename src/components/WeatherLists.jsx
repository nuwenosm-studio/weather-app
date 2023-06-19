import { AiOutlineCloseCircle } from "react-icons/ai";

import { useState } from "react";

const WeatherLists = ({ cities, setCities }) => {
    const [unit, setUnit] = useState("celsius");


    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === "celsius" ? "fahrenheit" : "celsius"));
    };
    const convertTemperature = (temp) => {
        if (unit === "fahrenheit") {
            return Math.round((temp * 9) / 5 + 32) + "°F";
        }
        return temp + "°C";
    };
    const handleCityDelete = (index) => {
        setCities((prevCities) => prevCities.filter((city, i) => i !== index));
    };

    return (
        <div>
            {cities.length > 0 &&
                <div className="cities_list">
                    <button onClick={toggleUnit} className="degree_btn">
                        {unit === "celsius" ? "Switch to °F" : "Switch to °C"}
                    </button>
                    {cities.map((city, index) => (
                        <div className="city_item" key={index}>
                            <div className="city_info">
                                <div className="city_name">
                                    {city.name}, {city.country}
                                </div>
                                <div className="weather_description">{city.description}</div>
                                <img src={`/icons/${city.icon}.png`} alt="" className="weather_icon" />
                            </div>
                            <div className="city_temp">
                                <div className="city_temp-avg">{convertTemperature(city.temp)}</div>
                                <div className="city_temp-extra">
                                    <div className="city_temp-high">
                                        H: {convertTemperature(city.tempHigh)}
                                    </div>
                                    <div className="city_temp-low">
                                        L: {convertTemperature(city.tempLow)}
                                    </div>
                                </div>
                            </div>
                            <div className="weather_remove" onClick={() => handleCityDelete(index)}>
                                <AiOutlineCloseCircle fontSize="32px"/>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
        
        
    );
};

  

export default WeatherLists