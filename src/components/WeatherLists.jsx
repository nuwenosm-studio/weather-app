import { useState } from "react";
import CityItem from './CityItem';

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
                        <CityItem 
                            city={city}
                            index={index}
                            key={index}
                            convertTemperature={convertTemperature}
                            handleCityDelete={handleCityDelete}
                        />
                    ))}
                </div>
            }
        </div>
    );
};
export default WeatherLists