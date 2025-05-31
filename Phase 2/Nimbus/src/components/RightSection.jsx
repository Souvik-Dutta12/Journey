import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useSearch } from '../context/SearchContext';
import WeeklyForecast from './WeeklyForecast';

const RightSection = () => {

    const { results } = useSearch();

    function generateWeatherFromToday(todayTemp, todayCondition) {
    const conditionEmojiMap = {
        Clouds: "☁️",
        Clear: "🌤️",
        Thunderstorm: "⛈️",
        Drizzle: "🌦️",
        Haze: "🌫️",
        Fog: "🌁",
        Mist: "🌫️",
        Rain: "🌧️",
        Smoke: "💨",
        Snow: "❄️",
        Windy: "🌬️",
        Cloudy: "☁️",
        Overcast: "☁️",
        "Partly Cloudy": "⛅",
        Sunny: "☀️",
        "Scattered Clouds": "🌤️",
        "Broken Clouds": "⛅",
        "Light Rain": "🌦️",
        "Heavy Rain": "🌧️",
        "Light Snow": "🌨️",
        "Heavy Snow": "❄️"
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

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay(); // 0 = Sunday

    const forecast = Array.from({ length: 7 }, (_, i) => {
        const dayIndex = (today + 1 + i) % 7;

        // Vary temp ±2°C
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

    return forecast;
}

    useEffect(() => {

        generateWeatherFromToday(results.main?.temp, results.weather?.[0].main);
    }, [])

    const sunrise = new Date(results.sys?.sunrise * 1000);
    const sunset = new Date(results.sys?.sunset * 1000);

    const sunriseTime = sunrise.toLocaleTimeString();
    const sunsetTime = sunset.toLocaleTimeString();


    return (
        <div className="w-100 h-auto rounded-2xl flex flex-col">
  {/* Wind & Sunrise/Sunset Section */}
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mt-5">
    
    {/* Wind Status */}
    <div className="bg-white/10 w-full md:w-1/2 p-4 h-full flex flex-col items-center justify-center rounded-2xl shadow-md backdrop-blur-md">
      <h3 className="text-sm sm:text-md text-gray-300 flex items-center gap-1">
        <i className="ri-windy-line"></i> Wind Status
      </h3>
      <div className="text-lg sm:text-xl font-semibold">{results.wind?.speed} km/h</div>
      <div className="text-lg sm:text-xl font-semibold">{results.wind?.deg}°</div>
    </div>

    {/* Sunrise & Sunset */}
    <div className="bg-white/10 w-full md:w-1/2 p-4 rounded-2xl shadow-md backdrop-blur-md">
      <h3 className="text-sm sm:text-md text-gray-300 mb-2 flex items-center gap-1 flex-wrap text-center">
        <i className="ri-sun-cloudy-fill"></i> Sunrise 
        <i className="ri-arrow-right-up-fill"></i> & 
        <i className="ri-arrow-left-down-fill"></i> Sunset 
        <i className="ri-sun-cloudy-line"></i>
      </h3>
      <div className="text-sm sm:text-md text-white">Sunrise: {sunriseTime}</div>
      <div className="text-sm sm:text-md text-white">Sunset: {sunsetTime}</div>
    </div>
  </div>

  {/* Weekly Forecast */}
  <WeeklyForecast />

  {/* Map Link */}
  <div className="text-sm sm:text-md text-right mt-10 flex justify-end">
    <a
      href={`https://www.google.com/maps?q=${results.coord?.lat},${results.coord?.lon}`}
      target="_blank"
      rel="noopener noreferrer"
      className='text-gray-400 hover:text-white duration-300 hover:underline'
    >
      View on Map
    </a>
  </div>
</div>

    )
}

export default RightSection
