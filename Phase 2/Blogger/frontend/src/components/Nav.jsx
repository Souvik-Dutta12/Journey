
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Menu as MenuIcon, X } from 'lucide-react';


const Nav = ({ className }) => {
    const [active, setActive] = useState(null);
    const [sidebarOpen, setSidebarOen] = useState(false);

    const toggleSidebar = () => setSidebarOen(!sidebarOpen);

    return (
        <>

            <div
                className={cn("fixed hidden sm:hidden md:block top-10 inset-x-0 max-w-4xl mx-auto z-100 ", className)}
            >
                <Menu setActive={setActive} >

                    <div className='flex  items-center justify-between space-x-20'>
                        <Link to={"/"} >
                            <h1 className='text-2xl font-black '>blogger</h1>
                        </Link>
                        <div className=' flex items-center justify-between space-x-15'>
                            <div className='flex items-center justify-center space-x-4'>
                                <Link to={"/"}>
                                    <MenuItem setActive={setActive} active={active} item={"Home"}></MenuItem>

                                </Link>
                                <MenuItem setActive={setActive} active={active} item="Services">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                        <HoveredLink href="/branding">Branding</HoveredLink>
                                    </div>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Products">
                                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                        <ProductItem
                                            title="Algochurn"
                                            href="https://algochurn.com"
                                            src="https://assets.aceternity.com/demos/algochurn.webp"
                                            description="Prepare for tech interviews like never before."
                                        />
                                        <ProductItem
                                            title="Tailwind Master Kit"
                                            href="https://tailwindmasterkit.com"
                                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                            description="Production ready Tailwind css components for your next project"
                                        />
                                        <ProductItem
                                            title="Moonbeam"
                                            href="https://gomoonbeam.com"
                                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                            description="Never write from scratch again. Go from idea to blog in minutes."
                                        />
                                        <ProductItem
                                            title="Rogue"
                                            href="https://userogue.com"
                                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                        />
                                    </div>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Pricing">
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                                        <HoveredLink href="/individual">Individual</HoveredLink>
                                        <HoveredLink href="/team">Team</HoveredLink>
                                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                                    </div>
                                </MenuItem>

                                <Link to={"/collection"}>
                                    <MenuItem setActive={setActive} active={active} item={"Collection"} />

                                </Link>

                            </div>

                            <div className='flex items-center justify-center space-x-4'>
                                <Link to={"/signup"}>
                                    <div className=" flex justify-center text-center">
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
                                        >

                                            <span className='hover:text-[#7fcfec] duration-300'>Sign up</span>
                                        </HoverBorderGradient>
                                    </div>
                                </Link>
                                <Link to={"/login"}>
                                    <div className=" flex justify-center text-center">
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
                                        >

                                            <span className='hover:text-[#7fcfec] duration-300'>Log in</span>
                                        </HoverBorderGradient>
                                    </div>
                                </Link>


                            </div>
                        </div>
                    </div>
                </Menu>






            </div>
            <div className=" md:hidden sm:block sm:w-[85vw]  px-5 py-10 flex items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-2xl font-black">blogger</h1>
                </Link>
                <button onClick={toggleSidebar}>
                    {sidebarOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>
            {sidebarOpen && (
                <div className="lg:hidden absolute top-20 left-0 z-100 right-0 bg-white dark:bg-black shadow-xl p-6 space-y-4 duration-500 rounded-xl">
                    <Link to="/" onClick={toggleSidebar} className="block hover:text-[#7fcfec]">Home</Link>
                    <Link to="/web-dev" onClick={toggleSidebar} className="block hover:text-[#7fcfec]">Services</Link>
                    <Link to="/interface-design" onClick={toggleSidebar} className="block hover:text-[#7fcfec]">Products</Link>
                    <Link to="/seo" onClick={toggleSidebar} className="block hover:text-[#7fcfec]">Pricing</Link>
                    <Link to="/collection" onClick={toggleSidebar} className="block hover:text-[#7fcfec]">Collection</Link>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                        <Link to="/signup" onClick={toggleSidebar} className="block border w-1/3 px-2 py-2 text-center rounded-full hover:text-[#7fcfec]">Sign up</Link>
                        <Link to="/login" onClick={toggleSidebar} className="block border w-1/3 px-2 py-2 text-center rounded-full hover:text-[#7fcfec]">Log in</Link>
                    </div>
                </div>
            )}


        </>
    )
}

export default Nav
