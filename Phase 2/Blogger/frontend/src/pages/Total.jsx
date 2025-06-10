import React from 'react'
import Footer from '../components/Footer'
import { CardContainer, CardItem, CardBody } from '../components/ui/3d-card'
const Total = () => {
    return (
        <>
            <div className='md:min-h-screen h-1/2 md:w-full sm:w-[90vw] rounded-md bg-black relative flex flex-col items-center justify-center'>

                
                <div className="w-full mt-40 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    
                    {[1, 2,3,4,5,6].map((item, index) => (
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
            </div>

            <Footer />
        </>

    )
}

export default Total
