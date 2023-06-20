import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ChartItem from "./ChartItem";

const CityItem = ({ city, index, convertTemperature, handleCityDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
        // console.log("open modal");
    };
    const closeModal = () => {
        setIsModalOpen(false);
        // console.log("close modal");
    };
    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="city_item">
            <div className="city_info" onClick={openModal}>
                <div className="city_name">{city.name}, {city.country}</div>
                <div className="weather_description">{city.description}</div>
                <img src={`icons/${city.icon}.PNG`} alt="" className="weather_icon" />
            </div>

            <div className="city_temp">
                <div className="city_temp-avg">{convertTemperature(city.temp)}</div>
                <div className="city_temp-extra">
                    <div className="city_temp-high">H: {convertTemperature(city.tempHigh)}</div>
                    <div className="city_temp-low">L: {convertTemperature(city.tempLow)}</div>
                </div>
            </div>

            <div className="weather_remove" onClick={() => handleCityDelete(index)}>
                <AiOutlineCloseCircle fontSize="32px" />
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal_content" onClick={handleModalClick}>
                        <div className="modal_close" onClick={closeModal}>
                            <AiOutlineCloseCircle fontSize="32px" />
                        </div>
                        <div className="modal_header">
                            <div className="city_info">
                                <div className="city_name">{city.name}</div>
                                <div className="weather_description">{city.description}</div>
                                <img src={`icons/${city.icon}.PNG`} alt="" className="weather_icon" />
                            </div>
                            <div className="city_temp">
                                <div className="city_temp-avg">{convertTemperature(city.temp)}</div>
                                <div className="city_temp-extra">
                                    <div className="city_temp-high">H: {convertTemperature(city.tempHigh)}</div>
                                    <div className="city_temp-low">L: {convertTemperature(city.tempLow)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal_body">
                            Forecast in the next 5 days
                            <ChartItem data={city.forecastData}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CityItem;
