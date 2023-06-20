import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const ChartItem = ({ data }) => {
  const time9AM = "09:00:00";

  const [currentDay, setCurrentDay] = useState("");
  const [forecastDays, setForecastDays] = useState([]);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDay = `${year}-${month}-${day}`;
    setCurrentDay(formattedDay);
  
    const newForecastDays = [];
    data.forEach(item => {
      let itemDay = item.dt_txt.split(" ")[0];
      let dayTime = item.dt_txt.split(" ")[1];
      if (itemDay !== currentDay && dayTime === time9AM) {
        newForecastDays.push({
          day: itemDay.substr(5,5),
          time: dayTime,
          temp: item.main.temp
        });
      }
    });
    setForecastDays(newForecastDays);
  }, [currentDay, data]);

  const chartData = {
    labels: forecastDays.map(day => day.day),
    datasets: [
      {
        label: "°C at 9am",
        data: forecastDays.map(day => day.temp),
        borderColor: "rgb(0, 97, 233)",
        backgroundColor: "rgb(253, 165, 0)"
      }
    ]
  };

  return (
    <div className="chart_item">
      <Line data={chartData} />
    </div>
  )
}

export default ChartItem;
