import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';

const Profile = () => {

    const { axios } = useAppContext();

    const user = JSON.parse(localStorage.getItem("user"));

    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [profileImage, setProfileImage] = useState(user?.profileImage || '');
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = async () => {
        setLoading(true);
        try {
            const res = await axios.put('/users/update', { username, email, profileImage });
            if (res.data.success) {
                toast.success('Profile updated successfully');
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            toast.error('Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        console.log(user)
    },[])

    return (
        
            
                user && (
                    <>
                    <div className="md:min-h-screen z-20 md:w-screen sm:w-[85vw] flex items-center justify-center px-4">
                <div className="w-full z-40 max-w-md bg-transparent rounded-xl shadow-md md:p-10 sm:p-5 md:mt-29 space-y-5 flex flex-col items-center justify-center">
                    <h2 className=" font-bold  text-center relative z-10 text-2xl sm:text-5xl md:text-6xl lg:text-4xl  bg-clip-text  text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans leading-tight ">Your Profile</h2>

                    <div className="w-40 h-40 relative rounded-full  border-2 border-zinc-600 ">
                        <img
                            src={profileImage || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(username)}&backgroundColor=3f3f46&fontWeight=600`}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    <label className="w-auto absolute bottom-0 z-20 right-0  text-md font-normal px-4 py-2 border rounded-full bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500 cursor-pointer  text-cyan-400 hover:text-cyan-300">
                        <i className="ri-upload-fill text-xl"></i>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className=" hidden"
                        />
                    </label>
                    </div>



                    <div className="w-full max-w-sm space-y-4">
                        <div className='flex flex-col gap-1'>
                            <label className="block text-md font-bold text-white">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className="block text-md font-bold text-white">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
                            />
                        </div>

                        <HoverBorderGradient
                            containerClassName="rounded-full w-1/2 mt-3"
                            as="button"
                            className=" dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
                        >

                            <span className='hover:text-[#7fcfec] duration-300 flex items-center justify-center gap-1'>{loading ? 'Saving...' : 'Save Changes'}</span>
                        </HoverBorderGradient>

                    </div>
                </div>
            </div>
            <Footer />
            </>
                )
            

        
    );
};

export default Profile;
