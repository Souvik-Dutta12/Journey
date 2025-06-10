import React from 'react'
import { Link } from 'react-router';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Collection = () => {
  return (

    <div className="w-full md:w-full sm:w-[85vw] min-h-screen p-6 ">
      <h1 className=" text-5xl sm:text-5xl md:text-7xl  bg-clip-text h-30 text-transparent bg-gradient-to-b from-white to-neutral-700  text-center font-sans font-bold  md:mt-10 sm:-mt-20">Few Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
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

      <Link to={"/collection"}>
        <div className=" flex justify-center mt-10 text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
          >

            <span className='hover:text-[#7fcfec] duration-300 text-xl'>Load more</span>
          </HoverBorderGradient>
        </div>
      </Link>
    </div>

  )
}

export default Collection
