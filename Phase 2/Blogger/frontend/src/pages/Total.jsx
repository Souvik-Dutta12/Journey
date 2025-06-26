import React, { useEffect,useState } from 'react'
import Footer from '../components/Footer'
import { CardContainer, CardItem, CardBody } from '../components/ui/3d-card'
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const Total = () => {


  const localuser = localStorage.getItem("user");

  const {user,axios} = useAppContext();

  const [userBlogs,setUserBlogs] = useState([]);




  const fetchUserBlogs = async ()=>{
    try{
      const res = await axios.get(`/users/user/${user._id}/blogs`);
      const allUserBlogs = res.data.data;
      const publishedBlogs = allUserBlogs.filter(blog=>blog.status === "published");
      setUserBlogs(publishedBlogs);
    }catch(error){
      toast.error("Failed to fetch blogs");
    }
  }

  useEffect(()=>{

    if(user && user._id){
      fetchUserBlogs()
    }
  },[user])
  return (
    localuser ?(
    <>
      <div className='md:min-h-screen h-1/2 md:w-full sm:w-[90vw] rounded-md bg-black relative flex flex-col items-center justify-center'>


        <h1 className='relative z-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 md:mt-40 sm:mt-5 bg-clip-text h-35  text-transparent bg-gradient-to-b from-white to-neutral-500  text-center font-sans font-bold leading-tight'>Your posted blogs</h1>
        <div className="w-full md:w-full sm:w-[90vw] -mt-15 md:-mt-10 sm:-mt-15 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center pr-5 md:pr-3 sm:pr-5 pl-5 md:pl-0 sm:pl-5">

          {Array.isArray(userBlogs) && userBlogs.length > 0 && userBlogs.map((blog, index) => (
            <CardContainer key={blog._id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-[500px] flex flex-col rounded-xl p-6 border">

                <div className='flex flex-col justify-evenly h-full'>
                  <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                    {blog.title}
                  </CardItem>

                  <CardItem as="p" className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 mt-2">
                    {blog.shortDescription || "No description provided."}
                  </CardItem>
                </div>

                <CardItem translateZ="20" className="w-full mt-4 flex-grow">
                  <img
                    src={blog.coverImage || "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="blog thumbnail"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={60}
                    as="a"
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-lg font-normal dark:text-[#7fcfec]"
                  >
                    Edit
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    as="a"
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-lg font-normal dark:text-red-500"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </CardItem>

                </div>

              </CardBody>
            </CardContainer>
          ))}

        </div>
      </div>


      <Footer />
    </>): null

  )
}

export default Total
