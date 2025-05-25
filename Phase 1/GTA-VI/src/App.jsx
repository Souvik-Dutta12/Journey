import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import Navbar from './assets/Components/Navbar'
import Download from './assets/Components/Download'
import Coming from './assets/Components/Coming'
import Vicecity from './assets/Components/Vicecity'
import CharOne from './assets/Components/CharOne'
import Frame from './assets/Components/Frame'
import Footer from './assets/Components/Footer'

const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill()
          }
        }
      })
  });

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${-xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <>
          <div
            className='main w-full 
              rotate-[-10deg] scale-[1.7] 
              md:rotate-[-10deg] md:scale-[1.7]  /* desktop */
              sm:rotate-0 sm:scale-100          /* mobile: no rotation, normal scale */
            '
          >
            <div className='landing overflow-hidden relative w-full h-screen bg-black'>

              <Navbar />

              <div className="imagesdiv overflow-hidden relative w-full h-screen">
                <img
                  className='sky scale-[1.7] rotate-[-20deg] h-full absolute top-0 left-0 w-full object-cover
                    md:scale-[1.7] md:rotate-[-20deg]
                    sm:scale-100 sm:rotate-0
                  '
                  src="sky.png"
                  alt=""
                />
                <img
                  className='bg scale-[1.8] rotate-[-3deg] h-full absolute top-0 left-0 w-full object-cover
                    md:scale-[1.8] md:rotate-[-3deg]
                    sm:scale-90 sm:rotate-0
                  '
                  src="bg.png"
                  alt=""
                />
                <div
                  className="text absolute top-20 flex flex-col gap-3 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]
                    md:scale-[1.4] md:rotate-[-10deg]
                    sm:scale-90 sm:rotate-0 sm:top-10
                  "
                >
                  <h1 className='text-[10rem] leading-none text-white -ml-40
                    md:text-[10rem] md:-ml-40
                    sm:text-5xl sm:ml-0 sm:text-center
                  '>grand</h1>
                  <h1 className='text-[10rem] leading-none text-white ml-20
                    md:text-[10rem] md:ml-20
                    sm:text-5xl sm:ml-0 sm:text-center
                  '>theft</h1>
                  <h1 className='text-[10rem] leading-none text-white -ml-40
                    md:text-[10rem] md:-ml-40
                    sm:text-5xl sm:ml-0 sm:text-center
                  '>auto</h1>
                </div>
                <img
                  className='absolute character -bottom-[150%] left-1/2 -translate-x-1/2 h-full scale-[3] rotate-[-20deg]
                    md:scale-[3] md:rotate-[-20deg] md:-bottom-[150%]
                    sm:scale-90 sm:rotate-0 sm:bottom-0
                  '
                  src="girlbg.png"
                  alt=""
                />
              </div>

              <div className="btmbar text-white absolute bottom-0 bg-gradient-to-t from-black to-transparent left-0 w-full py-15 px-10
                sm:py-5 sm:px-4
              ">
                <div className='flex gap-4 items-center'>
                  <i className="ri-arrow-down-line text-4xl sm:text-2xl"></i>
                  <h3 className='font-[Helvetica_Now_Display] text-xl sm:text-base'>Scroll Down</h3>
                </div>

                <img
                  className='h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    sm:h-12
                  '
                  src="./ps5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Coming />
          <Download />
          <Vicecity />
          <CharOne />
          <Frame />
          <Footer />
        </>
      )}

    </>
  )
}

export default App
