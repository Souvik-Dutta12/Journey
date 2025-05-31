import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import { useSearch } from '../context/SearchContext';

const Navbar = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'long' });
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDate = `${day} ${month}`;
  const formattedTime = `${hours}:${minutes}`;

  const defaultCity = 'Kolkata';
  const [input, setInput] = useState(defaultCity);
  const { search } = useSearch();

  // Call search for default city when component mounts
  useEffect(() => {
    search(defaultCity);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      search(input.trim());
    }
  };

  return (
    <div className='w-full mb-9 h-auto p-3 md:p-5 font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0'>
  <h3 className='text-2xl font-semibold text-white w-full md:w-[25%] flex items-center gap-2 justify-center md:justify-start'>
    <i className="ri-cloud-line text-lg"></i>Nimbus.now
  </h3>

  <div className='w-full md:w-[75%] flex flex-col md:flex-row items-center  lg:ml-19 justify-between gap-4'>
    <div className="search flex w-full md:w-3/4 items-center justify-center md:justify-start">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search for a city'
        className='bg-white w-full md:w-90 px-4 md:px-5 py-2 rounded-full text-blue-700 text-base md:text-lg font-semibold outline-none border border-gray-300 focus:border-blue-500 transition duration-300 shadow-lg'
      />
      <button
        type='submit'
        onClick={handleSubmit}
        className='bg-transparent border text-base md:text-xl font-sans cursor-pointer rounded-full font-semibold px-4 md:px-5 py-2 ml-2 md:ml-3 hover:bg-white hover:text-blue-700 duration-500 shadow-xl'
      >
        Search
      </button>
    </div>
    <div className='text-base md:text-xl font-semibold text-center md:text-right w-full md:w-auto'>
      <span>{formattedDate} | {formattedTime}</span>
    </div>
  </div>
</div>

  );
};

export default Navbar;
