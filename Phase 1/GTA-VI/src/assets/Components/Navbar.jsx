import React, { useState } from 'react';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [option, setOption] = useState('peoples');
    const [selectedItem, setSelectedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const peopleList = [
        { name: 'JASON DUVAL', img: 'public/jason.webp' },
        { name: 'LUCIA CAMINOS', img: 'public/lucia.webp' },
        { name: 'CAL HAMPTON', img: 'public/cal.webp' },
        { name: 'BOOBIE IKE', img: 'public/boobie.webp' },
        { name: "DRE'QUAN PRIEST", img: 'public/drequan.webp' },
        { name: 'REAL DIMAZ', img: 'public/dimaz.webp' },
        { name: 'RAUL BAUTISTA', img: 'public/raul.webp' },
        { name: 'BRIAN HEDER', img: 'public/brian.webp' },
    ];

    const placesList = [
        { name: 'VICE CITY', img: 'public/vice-city.webp' },
        { name: 'LEONIDA KEYS', img: 'public/leonida-keys.webp' },
        { name: 'GRASSRIVERS', img: 'public/grassrivers.webp' },
        { name: 'PORT GELLHORN', img: 'public/port-gellhorn.webp' },
        { name: 'AMBROSIA', img: 'public/ambrosia.webp' },
        { name: 'MOUNT KALAGA', img: 'public/kalaga.webp' },
    ];

    const trailersList = [
        {
            id: 1,
            link: "https://www.youtube.com/embed/VQRLujxTm3c",
            date: "May 6, 2025"
        },
        {
            id: 2,
            link: "https://www.youtube.com/embed/QdBZY2fkU-0",
            date: "December 5, 2023"
        }
    ];

    const downloadsList = [
        {
            img: "public/videos-desktop.webp",
            type: "videos"
        },
        {
            img: "public/screenshots-desktop.webp",
            type: "screenshots"
        },
        {
            img: "public/artwork-desktop.webp",
            type: "artwork & wallpapers"
        }
    ]

    const getList = () => {
        if (option === 'peoples') return peopleList;
        if (option === 'places') return placesList;
        if (option === 'trailers') return trailersList;
        if (option === 'downloads') return downloadsList;
        return [];
    };

    const renderContent = () => {
        const list = getList();

        if (list === peopleList || list === placesList) {
            return (
                <div className='relative text-white text-6xl mt-0 p-5 '>
                    <div className='flex flex-col gap-2  w-[80%]'>
                        {list.map((item, idx) => (
                            <h3
                                key={idx}
                                onClick={() => setSelectedItem(item.name)}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`cursor-pointer duration-500 hover:text-yellow-100 ${selectedItem === item.name ? 'text-red-300' : ''
                                    }`}
                            >
                                {item.name}
                            </h3>
                        ))}
                    </div>

                    {/* Hover Image Preview */}
                    {hoveredItem && (
                        <img
                            src={hoveredItem.img}
                            alt={hoveredItem.name}
                            className="absolute  z-[15] top-[-27%] right-[-800px] scale-x-[1.165] scale-y-[1.1] w-screen h-screen shadow-lg transition-opacity duration-500 opacity-100"
                        />
                    )}
                </div>
            );
        } else if (list === trailersList) {
            return (
                <div className="p-5 flex flex-col items-center justify-center gap-5 text-white">
                    {list.map((item, idx) => (
                        <div key={idx} className="bg-zinc-900  w-full hover:bg-zinc-800 duration-500 cursor-pointer shadow-lg flex items-center gap-5">
                            <div className="w-[45%] h-full relative">
                                <iframe
                                    src={item.link}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className='flex flex-col items-start '>
                                <h2 className="text-lg font-[Helvetica_Now_Display] font-bold ">Grand Theft Auto VI Trailer {item.id}</h2>
                                <h2 className='text-sm font-[Helvetica_Now_Display] font-thin text-zinc-400'>{item.date}</h2>
                            </div>

                        </div>
                    ))}
                </div>
            );
        } else if (list === downloadsList) {
            return (
                <div className="p-5 gap-3 flex flex-col text-white">
                    {list.map((item, idx) => (
                        <div key={idx} className="bg-yellow-100 w-full h-45 relative shadow-lg">
                            <img className='w-full h-full object-cover object-top cursor-pointer hover:scale-x-[0.97] hover:scale-y-[0.9] duration-500' src={item.img} alt="" />
                            <span className='text-xl font-mono tracking-tighter uppercase font-bold text-yellow-100 absolute bottom-3 left-5 text-shadow-2xs'>{item.type}</span>
                        </div>
                    ))}
                </div>
            );
        } else {
            return <div className='text-white text-6xl'>Select an option from the sidebar</div>;
        }

    };

    return (
        <>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-[50%] bg-black z-[20] transition-transform duration-700 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="options flex items-center justify-between p-10">
                    <div className="font-[Helvetica_Now_Display] font-bold flex items-center text-xl gap-3 text-white">
                        {['peoples', 'places', 'trailers', 'downloads'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setOption(item);
                                    setSelectedItem(null);
                                    setHoveredItem(null);
                                }}
                                className='px-5 py-3 cursor-pointer rounded-full hover:text-yellow-100 duration-700 focus:bg-white focus:text-black'
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setSidebar(false)}
                        className='text-white w-12 h-12 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 cursor-pointer relative'
                    >
                        <div className='h-1.5 w-8 absolute rounded-full bg-white rotate-[45deg]'></div>
                        <div className='h-1.5 w-8 absolute rounded-full bg-white rotate-[135deg]'></div>
                    </button>
                </div>
                <div className='w-full px-5 max-h-screen'>
                    {renderContent()}
                </div>
            </div>

            {/* Navbar Icon */}
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
                <div className='logo  flex gap-7'>
                    <div onClick={() => setSidebar(!sidebar)} className='lines cursor-pointer flex flex-col gap-[5px]'>
                        <div className='line w-15 h-2 bg-white rounded'></div>
                        <div className='line w-8 h-2 bg-white rounded'></div>
                        <div className='line w-5 h-2 bg-white rounded'></div>
                    </div>
                    <h3 className='text-4xl -mt-[8px] leading-none text-white'>Rockstar</h3>
                </div>
            </div>
        </>
    );
};

export default Navbar;
