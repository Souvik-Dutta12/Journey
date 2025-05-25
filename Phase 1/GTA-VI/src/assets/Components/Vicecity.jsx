import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const splitTextToSpans = (text) =>
  text.split('').map((char, i) => (
    <span
      key={i}
      className="letter"
      style={{ opacity: 0, display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
    >
      {char}
    </span>
  ));

const Vicecity = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll('.letter');

    gsap.to(letters, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
      opacity: 1,
      stagger: 0.05,
      ease: 'power1.out',
    });
  }, []);

  return (
    <div className="w-screen h-screen font-mono tracking-tighter font-bols bg-black flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="mt-10 flex flex-col items-start gap-5 justify-center bg-radial-[at_60%_90%] from-yellow-100 via-pink-400 to-pink-500 bg-clip-text text-transparent px-59 font-semibold"
      >
        <span className="text-7xl font-black">
          {splitTextToSpans('Vice City, USA.')}
        </span>
        <p className="text-4xl mt-5">
          {splitTextToSpans(
            'Jason and Lucia have always known the deck is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ratione. stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive.'
          )}
        </p>
      </div>
    </div>
  );
};

export default Vicecity;
