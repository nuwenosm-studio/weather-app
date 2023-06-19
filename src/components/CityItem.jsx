import { AiOutlineCloseCircle } from "react-icons/ai";

const CityItem = ({city, index, convertTemperature, handleCityDelete}) => {
    return (
        <div className="city_item">
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
    )
}

export default CityItem