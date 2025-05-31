import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { useSearch } from '../context/SearchContext'

const Hero = () => {

  const {results} = useSearch();


  return (
    <div className='p-4 sm:p-5 bg-white/10 backdrop-blur-md shadow-md w-full sm:w-[80%] md:w-[80%] lg:w-100 h-100 rounded-2xl flex flex-col items-center justify-center mt-5 md:mt-8 lg:mt-0'>
  <img
    className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40"
    src={`https://openweathermap.org/img/wn/${results.weather?.[0].icon}@2x.png`}
    alt="Weather Icon"
  />

  <span className='text-lg sm:text-xl md:text-2xl font-semibold mt-2'>
    {results.weather?.[0].main}
  </span>

  <span className='text-xs sm:text-sm md:text-lg text-gray-400 mt-1'>
    Pressure: {results.main?.pressure} hPa
  </span>

  <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-8 mt-4 text-center text-sm sm:text-base md:text-lg'>
    <span className='flex items-center gap-1'>
      <i className="ri-water-percent-fill"></i> Humidity: {results.main?.humidity}%
    </span>
    <span className='flex items-center gap-1'>
      <i className="ri-eye-line"></i> Visibility: {results.visibility} m
    </span>
  </div>
</div>

  )
}

export default Hero
