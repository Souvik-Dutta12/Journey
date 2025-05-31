import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { useSearch } from '../context/SearchContext';

const LeftSection = () => {
  const { results } = useSearch();

  return (
    <div className="bg-white/10 backdrop-blur-md w-full sm:w-[80%] md:w-[80%] lg:w-100 h-100 rounded-2xl shadow-md p-4 sm:p-5 flex flex-col sm:items-center sm:justify-center lg:items-start md:items-center md:justify-center">
  <div className="flex flex-col">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2">
      <i className="ri-map-pin-2-line"></i>
      {results.name}
    </h2>

    <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-1">
      {results.weather?.[0].main}
    </p>

    <p className="text-gray-400 text-sm md:text-base mt-2">
      {results.weather?.[0].description}
    </p>

    <div className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
      {results.main?.temp}°C
    </div>

    <span className="text-sm md:text-base mt-2 flex gap-2 items-center">
      <i className="ri-thermometer-line"></i>
      Feels like: {results.main?.feels_like}°C
    </span>

    <span className="text-gray-400 px-3 py-2 mt-3 text-xs sm:text-sm md:text-base w-fit border rounded-full flex items-center justify-center">
      • {results.sys?.country}: {results.sys?.type}
    </span>

    <div className="flex flex-col mt-4 gap-1 text-sm md:text-base">
      <span>Minimum temperature: {results.main?.temp_min}°C</span>
      <span>Maximum temperature: {results.main?.temp_max}°C</span>
    </div>
  </div>
</div>

  );
};

export default LeftSection;
