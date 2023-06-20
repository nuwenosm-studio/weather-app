import { useState, useEffect } from 'react';

const ChartItem = ({ data }) => {
  const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayInAWeek = new Date().getDay();
  const next5Days = WEEK_DAYS.slice(dayInAWeek, dayInAWeek + 5);
  
  const [currentDay, setCurrentDay] = useState("");
  const [forecastDays, setForecastDays] = useState([]);

  const time9AM = "09:00:00";

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
      if (itemDay !== formattedDay && dayTime === time9AM) {
        newForecastDays.push({
          day: itemDay,
          time: dayTime,
          temp: item.main.temp
        });
      }
    });
    setForecastDays(newForecastDays);
  }, [data]);

  return (
    <div className="chart_item">
      {forecastDays.map((day, index) => (
        <div className="day_weather" key={index}>
          {day.time}
        </div>
      ))}
    </div>
  )
}

export default ChartItem;
