import React, { useState } from 'react'
import { Button } from "../components/ui/moving-border";
import { Link } from 'react-router';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Footer from "../components/Footer"
import Pagination from '../components/Pagination';
import { GlareCard } from "../components/ui/glare-card";

const CollectionHero = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    //   const currentPosts = blogs.slice(indexOfFirst, indexOfLast);
    return (
        <>

            <div className="md:h-auto h-1/2 md:w-full sm:w-[90vw] rounded-md bg-black relative flex flex-col items-center justify-center antialiased md:mt-50  sm:mt-10">
                <h1 className='relative z-10 text-lg sm:text-lg md:text-2xl lg:text-2xl max-w-8xl bg-clip-text md:h-35 text-transparent bg-gradient-to-b from-white to-neutral-500  text-center font-sans p-9 font-bold leading-tight '>Welcome to the blog collection! Explore a variety of posts shared by our community — from personal insights to helpful tutorials. Got something to share? You can also write your own blog right from here and let your voice be heard. Start expressing your thoughts, stories, or knowledge with just a click!</h1>
                <Link to={"/writeblog"} className=''>
                    <Button
                        containerClassName="w-auto  hover:bg-zinc-800"
                        borderRadius="1.75rem"
                        className="bg-white px-5 dark:bg-black/90 hover:bg-zinc-800 duration-700 z-40 cursor-pointer text-black dark:text-white border-neutral-200 dark:border-slate-800 flex gap-3"
                    >Write your own blog

                    </Button>
                </Link>
            </div>
            <div className="w-full md:w-full sm:w-[90vw] mt-3 p-6 flex items-center justify-center gap-10 md:gap-20 sm:gap-10">
                <button className='cursor-pointer'>
                    <Link to={'/total'}>
                        <GlareCard className="flex flex-col items-center justify-center">
                    
                    <h1 className='flex items-center md:gap-2 sm:gap-1 md:text-4xl sm:text-lg justify-center font-bold'>Total blog <i className="ri-news-line"></i></h1>
                    <span className='font-bold md:text-4xl sm:text-lg'>0</span>
                    
                </GlareCard>
                    </Link>
                </button>
                <button className=' cursor-pointer'>
                    <Link to={'/draft'}>
                        <GlareCard className="flex flex-col items-center justify-center">
                    <h1 className='flex items-center md:gap-2 sm:gap-1 md:text-4xl sm:text-lg justify-center font-bold'>Draft<i className="ri-draft-line"></i></h1>
                    <span className='font-bold md:text-4xl sm:text-lg'>0</span>
                </GlareCard>
                    </Link>
                </button>

            </div>

            <div className="w-full md:w-full sm:w-[90vw] min-h-screen p-6 ">
                <h1 className=" text-5xl sm:text-5xl md:text-7xl  bg-clip-text h-30 text-transparent bg-gradient-to-b from-white to-neutral-700  text-center font-sans font-bold  md:mt-10 sm:-mt-20">Our Collections</h1>
                <div className="w-full md:w-full sm:w-[90vw] flex flex-wrap gap-2 p-5">
                    <span className="cursor-pointer transition-all hover:bg-indigo-300 hover:border-indigo-500 duration-300 hover:text-black rounded-md border border-indigo-400 bg-indigo-200 px-1.5 py-0.5 text-sm leading-none text-indigo-700 no-underline group-hover:no-underline dark:bg-indigo-300/10 dark:text-indigo-500">ai</span>
                    <span className="cursor-pointer transition-all hover:bg-yellow-300 hover:border-yellow-500 duration-300 hover:text-black rounded-md border border-yellow-400 bg-yellow-200 px-1.5 py-0.5 text-sm leading-none text-yellow-700 no-underline group-hover:no-underline dark:bg-yellow-300/10 dark:text-yellow-500">python</span>
                    <span className="cursor-pointer transition-all hover:bg-blue-300 hover:border-blue-500 duration-300 hover:text-black rounded-md border border-blue-400 bg-blue-200 px-1.5 py-0.5 text-sm leading-none text-blue-700 no-underline group-hover:no-underline dark:bg-blue-300/10 dark:text-blue-500">programming</span>
                    <span className="cursor-pointer transition-all hover:bg-green-300 hover:border-green-500 duration-300 hover:text-black rounded-md border border-green-400 bg-green-200 px-1.5 py-0.5 text-sm leading-none text-green-700 no-underline group-hover:no-underline dark:bg-green-300/10 dark:text-green-500">beginners</span>
                    <span className="cursor-pointer transition-all hover:bg-gray-300 hover:border-gray-500 duration-300 hover:text-black rounded-md border border-gray-400 bg-gray-200 px-1.5 py-0.5 text-sm leading-none text-gray-700 no-underline group-hover:no-underline dark:bg-gray-300/10 dark:text-gray-500">discuss</span>
                    <span className="cursor-pointer transition-all hover:bg-pink-300 hover:border-pink-500 duration-300 hover:text-black rounded-md border border-pink-400 bg-pink-200 px-1.5 py-0.5 text-sm leading-none text-pink-700 no-underline group-hover:no-underline dark:bg-pink-300/10 dark:text-pink-500">jokes</span>
                    <span className="cursor-pointer transition-all hover:bg-cyan-300 hover:border-cyan-500 duration-300 hover:text-black rounded-md border border-cyan-400 bg-cyan-200 px-1.5 py-0.5 text-sm leading-none text-cyan-700 no-underline group-hover:no-underline dark:bg-cyan-300/10 dark:text-cyan-500">watercooler</span>
                    <span className="cursor-pointer transition-all hover:bg-blue-300 hover:border-blue-600 duration-300 hover:text-black rounded-md border border-blue-600 bg-blue-200 px-1.5 py-0.5 text-sm leading-none text-blue-800 no-underline group-hover:no-underline dark:bg-blue-300/10 dark:text-blue-500">webdev</span>
                    <span className="cursor-pointer transition-all hover:bg-sky-300 hover:border-sky-500 duration-300 hover:text-black rounded-md border border-sky-400 bg-sky-200 px-1.5 py-0.5 text-sm leading-none text-sky-700 no-underline group-hover:no-underline dark:bg-sky-300/10 dark:text-sky-500">react</span>
                    <span className="cursor-pointer transition-all hover:bg-red-300 hover:border-red-500 duration-300 hover:text-black rounded-md border border-red-400 bg-red-200 px-1.5 py-0.5 text-sm leading-none text-red-700 no-underline group-hover:no-underline dark:bg-red-300/10 dark:text-red-500">angular</span>
                    <span className="cursor-pointer transition-all hover:bg-emerald-300 hover:border-emerald-500 duration-300 hover:text-black rounded-md border border-emerald-400 bg-emerald-200 px-1.5 py-0.5 text-sm leading-none text-emerald-700 no-underline group-hover:no-underline dark:bg-emerald-300/10 dark:text-emerald-500">vue</span>
                    <span className="cursor-pointer transition-all hover:bg-yellow-300 hover:border-yellow-500 duration-300 hover:text-black rounded-md border border-yellow-400 bg-yellow-200 px-1.5 py-0.5 text-sm leading-none text-yellow-700 no-underline group-hover:no-underline dark:bg-yellow-300/10 dark:text-yellow-500">javascript</span>
                    <span className="cursor-pointer transition-all hover:bg-purple-300 hover:border-purple-500 duration-300 hover:text-black rounded-md border border-purple-400 bg-purple-200 px-1.5 py-0.5 text-sm leading-none text-purple-700 no-underline group-hover:no-underline dark:bg-purple-300/10 dark:text-purple-500">hackathon</span>
                    <span className="cursor-pointer transition-all hover:bg-rose-300 hover:border-rose-500 duration-300 hover:text-black rounded-md border border-rose-400 bg-rose-200 px-1.5 py-0.5 text-sm leading-none text-rose-700 no-underline group-hover:no-underline dark:bg-rose-300/10 dark:text-rose-500">vibecoding</span>
                    <span className="cursor-pointer transition-all hover:bg-teal-300 hover:border-teal-500 duration-300 hover:text-black rounded-md border border-teal-400 bg-teal-200 px-1.5 py-0.5 text-sm leading-none text-teal-700 no-underline group-hover:no-underline dark:bg-teal-300/10 dark:text-teal-500">devrel</span>
                    <span className="cursor-pointer transition-all hover:bg-fuchsia-300 hover:border-fuchsia-500 duration-300 hover:text-black rounded-md border border-fuchsia-400 bg-fuchsia-200 px-1.5 py-0.5 text-sm leading-none text-fuchsia-700 no-underline group-hover:no-underline dark:bg-fuchsia-300/10 dark:text-fuchsia-500">blockchain</span>
                    <span className="cursor-pointer transition-all hover:bg-lime-300 hover:border-lime-500 duration-300 hover:text-black rounded-md border border-lime-400 bg-lime-200 px-1.5 py-0.5 text-sm leading-none text-lime-700 no-underline group-hover:no-underline dark:bg-lime-300/10 dark:text-lime-500">career</span>
                    <span className="cursor-pointer transition-all hover:bg-orange-300 hover:border-orange-500 duration-300 hover:text-black rounded-md border border-orange-400 bg-orange-200 px-1.5 py-0.5 text-sm leading-none text-orange-700 no-underline group-hover:no-underline dark:bg-orange-300/10 dark:text-orange-500">writing</span>
                    <span className="cursor-pointer transition-all hover:bg-green-400 hover:border-green-700 duration-300 hover:text-black rounded-md border border-green-600 bg-green-200 px-1.5 py-0.5 text-sm leading-none text-green-800 no-underline group-hover:no-underline dark:bg-green-300/10 dark:text-green-500">opensource</span>
                    <span className="cursor-pointer transition-all hover:bg-amber-400 hover:border-amber-800 duration-300 hover:text-black rounded-md border border-amber-700 bg-amber-200 px-1.5 py-0.5 text-sm leading-none text-amber-800 no-underline group-hover:no-underline dark:bg-amber-300/10 dark:text-amber-500">rust</span>
                    <span className="cursor-pointer transition-all hover:bg-violet-300 hover:border-violet-500 duration-300 hover:text-black rounded-md border border-violet-400 bg-violet-200 px-1.5 py-0.5 text-sm leading-none text-violet-700 no-underline group-hover:no-underline dark:bg-violet-300/10 dark:text-violet-500">machinelearning</span>
                    <span className="cursor-pointer transition-all hover:bg-amber-300 hover:border-amber-500 duration-300 hover:text-black rounded-md border border-amber-400 bg-amber-200 px-1.5 py-0.5 text-sm leading-none text-amber-700 no-underline group-hover:no-underline dark:bg-amber-300/10 dark:text-amber-500">scratch</span>
                    <span className="cursor-pointer transition-all hover:bg-blue-200 hover:border-blue-400 duration-300 hover:text-black rounded-md border border-blue-300 bg-blue-100 px-1.5 py-0.5 text-sm leading-none text-blue-600 no-underline group-hover:no-underline dark:bg-blue-200/10 dark:text-blue-400">coding</span>
                    <span className="cursor-pointer transition-all hover:bg-indigo-300 hover:border-indigo-500 duration-300 hover:text-black rounded-md border border-indigo-400 bg-indigo-200 px-1.5 py-0.5 text-sm leading-none text-indigo-700 no-underline group-hover:no-underline dark:bg-indigo-300/10 dark:text-indigo-500">learning</span>
                    <span className="cursor-pointer transition-all hover:bg-gray-300 hover:border-gray-500 duration-300 hover:text-black rounded-md border border-gray-400 bg-gray-200 px-1.5 py-0.5 text-sm leading-none text-gray-700 no-underline group-hover:no-underline dark:bg-gray-300/10 dark:text-gray-500">platform</span>
                    <span className="cursor-pointer transition-all hover:bg-stone-300 hover:border-stone-500 duration-300 hover:text-black rounded-md border border-stone-400 bg-stone-200 px-1.5 py-0.5 text-sm leading-none text-stone-700 no-underline group-hover:no-underline dark:bg-stone-300/10 dark:text-stone-500">management</span>
                    <span className="cursor-pointer transition-all hover:bg-slate-300 hover:border-slate-500 duration-300 hover:text-black rounded-md border border-slate-400 bg-slate-200 px-1.5 py-0.5 text-sm leading-none text-slate-700 no-underline group-hover:no-underline dark:bg-slate-300/10 dark:text-slate-500">development</span>
                    <span className="cursor-pointer transition-all hover:bg-zinc-300 hover:border-zinc-500 duration-300 hover:text-black rounded-md border border-zinc-400 bg-zinc-200 px-1.5 py-0.5 text-sm leading-none text-zinc-700 no-underline group-hover:no-underline dark:bg-zinc-300/10 dark:text-zinc-500">systems</span>
                    <span className="cursor-pointer transition-all hover:bg-neutral-300 hover:border-neutral-500 duration-300 hover:text-black rounded-md border border-neutral-400 bg-neutral-200 px-1.5 py-0.5 text-sm leading-none text-neutral-700 no-underline group-hover:no-underline dark:bg-neutral-300/10 dark:text-neutral-500">tooling</span>
                    <span className="cursor-pointer transition-all hover:bg-orange-400 hover:border-orange-600 duration-300 hover:text-black rounded-md border border-orange-500 bg-orange-300 px-1.5 py-0.5 text-sm leading-none text-orange-800 no-underline group-hover:no-underline dark:bg-orange-400/10 dark:text-orange-500">gamedev</span>
                    <span className="cursor-pointer transition-all hover:bg-pink-400 hover:border-pink-600 duration-300 hover:text-black rounded-md border border-pink-500 bg-pink-300 px-1.5 py-0.5 text-sm leading-none text-pink-800 no-underline group-hover:no-underline dark:bg-pink-400/10 dark:text-pink-500">design</span>
                    <span className="cursor-pointer transition-all hover:bg-blue-400 hover:border-blue-600 duration-300 hover:text-black rounded-md border border-blue-500 bg-blue-300 px-1.5 py-0.5 text-sm leading-none text-blue-800 no-underline group-hover:no-underline dark:bg-blue-400/10 dark:text-blue-500">cpp</span>
                    <span className="cursor-pointer transition-all hover:bg-purple-400 hover:border-purple-600 duration-300 hover:text-black rounded-md border border-purple-500 bg-purple-300 px-1.5 py-0.5 text-sm leading-none text-purple-800 no-underline group-hover:no-underline dark:bg-purple-400/10 dark:text-purple-500">sfml</span>
                    <span className="cursor-pointer transition-all hover:bg-green-400 hover:border-green-600 duration-300 hover:text-black rounded-md border border-green-500 bg-green-300 px-1.5 py-0.5 text-sm leading-none text-green-800 no-underline group-hover:no-underline dark:bg-green-400/10 dark:text-green-500">weeklyretro</span>
                    <span className="cursor-pointer transition-all hover:bg-rose-400 hover:border-rose-600 duration-300 hover:text-black rounded-md border border-rose-500 bg-rose-300 px-1.5 py-0.5 text-sm leading-none text-rose-800 no-underline group-hover:no-underline dark:bg-rose-400/10 dark:text-rose-500">top7</span>
                    <span className="cursor-pointer transition-all hover:bg-sky-400 hover:border-sky-600 duration-300 hover:text-black rounded-md border border-sky-500 bg-sky-300 px-1.5 py-0.5 text-sm leading-none text-sky-800 no-underline group-hover:no-underline dark:bg-sky-400/10 dark:text-sky-500">metrics</span>
                    <span className="cursor-pointer transition-all hover:bg-cyan-400 hover:border-cyan-600 duration-300 hover:text-black rounded-md border border-cyan-500 bg-cyan-300 px-1.5 py-0.5 text-sm leading-none text-cyan-800 no-underline group-hover:no-underline dark:bg-cyan-400/10 dark:text-cyan-500">community</span>
                    <span className="cursor-pointer transition-all hover:bg-emerald-400 hover:border-emerald-600 duration-300 hover:text-black rounded-md border border-emerald-500 bg-emerald-300 px-1.5 py-0.5 text-sm leading-none text-emerald-800 no-underline group-hover:no-underline dark:bg-emerald-400/10 dark:text-emerald-500">unity3d</span>
                    <span className="cursor-pointer transition-all hover:bg-indigo-400 hover:border-indigo-600 duration-300 hover:text-black rounded-md border border-indigo-500 bg-indigo-300 px-1.5 py-0.5 text-sm leading-none text-indigo-800 no-underline group-hover:no-underline dark:bg-indigo-400/10 dark:text-indigo-500">html5games</span>
                    <span className="cursor-pointer transition-all hover:bg-yellow-400 hover:border-yellow-600 duration-300 hover:text-black rounded-md border border-yellow-500 bg-yellow-300 px-1.5 py-0.5 text-sm leading-none text-yellow-800 no-underline group-hover:no-underline dark:bg-yellow-400/10 dark:text-yellow-500">gameporting</span>
                    <span className="cursor-pointer transition-all hover:bg-orange-400 hover:border-orange-600 duration-300 hover:text-black rounded-md border border-orange-500 bg-orange-300 px-1.5 py-0.5 text-sm leading-none text-orange-800 no-underline group-hover:no-underline dark:bg-orange-400/10 dark:text-orange-500">devchallenge</span>
                    <span className="cursor-pointer transition-all hover:bg-rose-400 hover:border-rose-600 duration-300 hover:text-black rounded-md border border-rose-500 bg-rose-300 px-1.5 py-0.5 text-sm leading-none text-rose-800 no-underline group-hover:no-underline dark:bg-rose-400/10 dark:text-rose-500">brightdatachallenge</span>
                    <span className="cursor-pointer transition-all hover:bg-cyan-400 hover:border-cyan-600 duration-300 hover:text-black rounded-md border border-cyan-500 bg-cyan-300 px-1.5 py-0.5 text-sm leading-none text-cyan-800 no-underline group-hover:no-underline dark:bg-cyan-400/10 dark:text-cyan-500">webdata</span>
                    <span className="cursor-pointer transition-all hover:bg-lime-400 hover:border-lime-600 duration-300 hover:text-black rounded-md border border-lime-500 bg-lime-300 px-1.5 py-0.5 text-sm leading-none text-lime-800 no-underline group-hover:no-underline dark:bg-lime-400/10 dark:text-lime-500">teambuilding</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
                                <CardItem

                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Make things float in air {item}
                                </CardItem>
                                <CardItem
                                    as="p"

                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Hover over this card to unleash the power of CSS perspective.
                                </CardItem>
                                <CardItem translateZ="20" className="w-full mt-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-6">
                                    <CardItem
                                        translateZ={20}
                                        as="a"
                                        href="#"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                                    >
                                        Read more →
                                    </CardItem>

                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}

                </div>

                <Pagination
                    totalPosts={30}
                    postsPerPage={3}
                    onPageChange={(page) => setCurrentPage(page)}
                />

            </div>


            <Footer />
        </>
    )
}

export default CollectionHero
