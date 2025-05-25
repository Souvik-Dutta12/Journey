import React, { useEffect, useRef } from 'react';

const Frame = () => {
  const frameRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const framee = frameRef.current;
    const button = buttonRef.current;

    if (framee) {
      const handleMouseEnter = () => {
        framee.classList.add('rotate-[1deg]', 'scale-[1.03]', 'shadow-2xl');
        button.classList.add('bg-yellow-100','shadow-2xl');
      };

      const handleMouseLeave = () => {
        framee.classList.remove('rotate-[1deg]', 'scale-[1.03]', 'shadow-2xl');
        button.classList.remove('bg-yellow-100','shadow-2xl');
      };

      framee.addEventListener('mouseenter', handleMouseEnter);
      framee.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup listeners on unmount
      return () => {
        framee.removeEventListener('mouseenter', handleMouseEnter);
        framee.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className='min-h-screen w-screen bg-[#283C61]'>
      <div className="to flex items-center justify-between px-87 pt-35">
        <img className='w-60' src="public/svg.svg" alt="" />
        <h3 className='font-mono tracking-tighter font-bold text-2xl text-shadow-2xs w-70 leading-7 text-white'>
          Tour a few of the must-see destinations across the sunshine state.
        </h3>
      </div>
      <div
        ref={frameRef}
        className="framee duration-700 relative z-[50] box w-[65%] h-158 my-29 mx-auto transition-transform "
      >
        <img className='absolute z-10 w-full h-full' src="public/overlay.webp" alt="" />
        <img className='absolute w-full h-full' src="public/poster.webp" alt="" />
        <button
        ref={buttonRef}
        className='absolute px-5 py-2 font-[Helvetica_Now_Display] bg-white rounded-full bottom-10 left-105 cursor-pointer z-10'>
          Explore Vice City
        </button>
      </div>
    </div>
  );
};

export default Frame;
