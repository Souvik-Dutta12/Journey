import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen relative min-h-screen bg-gradient-to-t from-black via-zinc-950 to-[#283C61] -mt-29 flex flex-col items-center justify-center'>
            <img className='w-[15%] py-40' src="public/vi.webp" alt="" />
            <div className='text-9xl text-white flex flex-col items-center justify-center '>
                <span>COMING</span>
                <span>SOON</span>
            </div>
            <div className="box w-full mt-30 text-sm h-120 font-[Helvetica_Now_Display] text-white bg-black flex flex-col gap-3 items-center justify-center">
                <span className='font-semibold'>Available on :</span>
                <img className='w-50' src="public/ps5.png" alt="" />
                <button className=' border-2 border-zinc-700 px-5 py-2 cursor-pointer rounded-full hover:bg-zinc-900 duration-300 flex items-center justify-evenly gap-7'>
                    <div className="left uppercase font-bold">get rockstar propaganda</div>
                    <div className="right w-130">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum perspiciatis ab voluptas placeat, nostrum enim nisi quod error, harum, voluptates fugiat voluptatibus atque.</div>
                </button>
                <ul className='flex items-center justify-evenly gap-8 text-zinc-400 '>
                    <li className='hover:text-white hover:underline'><a href="">Corporate</a></li>
                    <li className='hover:text-white hover:underline'><a href="">Privacy</a></li>
                    <li className='hover:text-white hover:underline'><a href="">Cookie Settings</a></li>
                    <li className='hover:text-white hover:underline'><a href="">Cookie Policy</a></li>
                    <li className='hover:text-white hover:underline'><a href="">Legal</a></li>
                    <li className='hover:text-white hover:underline'><a href="">Do Not Sell or Share My Personal Information</a></li>

                </ul>
                <div className='flex items-center justify-center gap-5 mt-2'>
                    <img className='w-7' src="public/RP.svg" alt="" />
                    <span className='w-72'> May contain content inappropriate for children. Visit <a className='underline hover:text-zinc-400' href="">esrb.org</a> for rating information.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
