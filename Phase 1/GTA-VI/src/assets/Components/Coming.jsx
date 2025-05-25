import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Coming = () => {
  const containerRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300',
        scrub: true,
      },
      scale: 0.5, // animate scale only
      ease: 'none',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-screen h-screen bg-black flex flex-col items-center justify-start pt-32'
    >
      <img
        ref={imageRef}
        className='w-[15%]'   // <-- unchanged CSS classes here
        src="public/vi.webp"
        alt=""
      />
      <div className='text-9xl mt-5 bg-radial-[at_60%_90%] from-yellow-200 via-pink-400 to-pink-500 to-90% bg-clip-text text-transparent flex flex-col items-center justify-center'>
        <span>COMING</span>
        <span>MAY 26</span>
        <span>2026</span>
      </div>
    </div>
  );
};

export default Coming;
