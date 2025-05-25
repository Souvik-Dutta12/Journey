import React from 'react'

const Download = () => {
  return (
    <div>
      <div className="w-full h-screen flex  items-center justify-center bg-black" >
            <div className="cntr flex text-white w-full h-[80%]">
              <div className="limg relative  w-1/2 h-full ">
                <img className='absolute scale-[1.3] w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />

              </div>
              <div className="rg w-[40%]">
                <h1 className='text-7xl '>Still Running</h1>
                <h1 className='text-7xl '>Not Hunting</h1>
                <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus a ex cumque similique beatae neque quae quaerat impedit autem? Nemo, est officiis?</p>
                <p className='mt-3 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corrupti temporibus explicabo nihil rem dolore accusantium est molestias at hic?
                  temporibus quia nisi aliquid velit illum maxime, ipsam odio animi consequatur sit quod dolores officia tenetur esse qui.
                </p>
                <p className='mt-3 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe omnis est ducimus aspernatur tempora soluta perferendis praesentium perspiciatis commodi.</p>
                <button className='bg-yellow-100 hover:bg-yellow-300 duration-500 cursor-pointer px-5 py-5 text-3xl text-black mt-10'>Download Now</button>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Download
