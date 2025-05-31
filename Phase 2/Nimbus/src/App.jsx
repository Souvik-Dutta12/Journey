import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { SearchProvider } from "./context/SearchContext";


export default function WeatherApp() {
  return (
    <SearchProvider>
  <div className="min-h-screen w-screen bg-gradient-to-bl from-sky-600 via-blue-800 to-gray-950 text-white flex flex-col items-center justify-center font-sans p-4 md:p-6 lg:p-8">
    <div className="h-auto w-full md:w-[80%] lg:w-[90%] max-w-[1440px] border rounded-2xl shadow-xl sm:p-3 md:p-4 lg:p-5 relative shadow-sky-500">
      
      <Navbar />

      <div className="mt-16 mb-9 flex flex-col md:flex-col lg:flex-row items-center gap-6 lg:justify-evenly md:justify-center sm:justify-center">
        <LeftSection />
        <Hero />
        <RightSection />
      </div>

    </div>
  </div>
</SearchProvider>


  );
}
