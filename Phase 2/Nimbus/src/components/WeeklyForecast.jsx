import React, { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";

// Paste your generateWeatherFromToday function here
function generateWeatherFromToday(todayTemp, todayCondition) {
  const conditionEmojiMap = {
    Clouds: "☁️",
    Clear: "🌤️",
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Haze: "🌫️",
    Fog: "🌫️",
    Mist: "🌫️",
    Rain: "🌧️",
    Smoke: "💨",
    Snow: "❄️",
    "Partly Cloudy": "⛅",
    Sunny: "☀️",
    "Scattered Clouds": "🌤️",
    "Heavy Rain": "🌧️",
    "Light Snow": "🌨️",
  };

  const similarConditions = {
    Sunny: ["Sunny", "Clear", "Partly Cloudy", "Scattered Clouds"],
    Clear: ["Clear", "Sunny", "Partly Cloudy", "Scattered Clouds"],
    "Partly Cloudy": ["Partly Cloudy", "Scattered Clouds", "Broken Clouds", "Sunny"],
    Cloudy: ["Cloudy", "Overcast", "Broken Clouds", "Scattered Clouds"],
    Overcast: ["Overcast", "Cloudy", "Mist", "Haze"],
    Rain: ["Rain", "Light Rain", "Heavy Rain", "Drizzle", "Thunderstorm"],
    Drizzle: ["Drizzle", "Light Rain", "Rain"],
    Thunderstorm: ["Thunderstorm", "Rain", "Heavy Rain", "Cloudy"],
    Snow: ["Snow", "Light Snow", "Heavy Snow"],
    "Light Snow": ["Light Snow", "Snow", "Cloudy"],
    "Heavy Snow": ["Heavy Snow", "Snow", "Overcast"],
    Mist: ["Mist", "Haze", "Fog"],
    Fog: ["Fog", "Mist", "Haze"],
    Haze: ["Haze", "Mist", "Fog"],
    Smoke: ["Smoke", "Haze", "Fog"],
    Windy: ["Windy", "Clear", "Sunny"]
  };

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const today = new Date().getDay();

  return Array.from({ length: 7 }, (_, i) => {
    const dayIndex = (today + 1 + i) % 7;
    const tempChange = Math.floor(Math.random() * 5) - 2;
    const newTemp = todayTemp + tempChange;

    const possibilities = similarConditions[todayCondition] || Object.keys(conditionEmojiMap);
    const condition = possibilities[Math.floor(Math.random() * possibilities.length)];
    const emoji = conditionEmojiMap[condition] || "❓";

    return {
      day: daysOfWeek[dayIndex],
      temperature: `${newTemp}°C`,
      condition: condition,
      emoji: emoji
    };
  });
}

// React component
function WeeklyForecast() {
  const [forecast, setForecast] = useState([]);

  const { results } = useSearch();

  useEffect(() => {
    // You can get these values dynamically if needed
    const todayTemp = results.main?.temp;
    const todayCondition = results.weather?.[0].main;
    const result = generateWeatherFromToday(todayTemp, todayCondition);
    
    setForecast(result);
  }, [results]);

  return (
    <div className="bg-white/10 p-4 rounded-2xl mt-5 shadow-md backdrop-blur-md">
      <h3 className="text-md text-white mb-4 ">7-Day Forecast</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-sm">

        {forecast.map((day) => (
          <div
            key={day.day}
            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition duration-200 flex flex-col  items-center justify-center"
          >
            <div className="text-sm">{day.day}</div>
            <div className="text-sm ">{day.temperature}</div>
            <div className="text-sm">{day.emoji}</div>
          </div>
        ))}
      </div>
    </div>


  )
}




export default WeeklyForecast;
