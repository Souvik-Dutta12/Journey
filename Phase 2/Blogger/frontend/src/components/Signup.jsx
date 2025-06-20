import React from 'react'
import { useState } from 'react';
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/moving-border";

const Signup = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add validation and backend logic
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('SignUp Data:', form);
  };

  const handleGoogleSignUp = () => {
    // TODO: Integrate Firebase / Google OAuth here
    console.log('Google Sign Up Clicked');
  };

  return (
    <div className="md:min-h-screen z-20 md:w-screen sm:w-[85vw] flex items-center justify-center px-4">
      <div className="w-full z-40 max-w-md bg-transparent rounded-xl shadow-md md:p-10 sm:p-5 md:mt-29 space-y-5">
        <h2 className=" font-bold  text-center relative z-10 text-2xl sm:text-5xl md:text-6xl lg:text-4xl  bg-clip-text  text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans leading-tight ">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="-mt-6 w-full flex flex-col gap-3 p-6">
          <div className='flex flex-col gap-1'>
            <label className="block text-md font-bold text-white">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className="block text-md font-bold text-white">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className="block text-md font-bold text-white">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className="block text-md font-bold text-white">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
              className="w-full text-md font-normal px-4 py-2 border rounded-xl bg-zinc-900 border-zinc-600 focus:outline-none focus:ring-0 focus:ring-zinc-500"
            />
          </div>


          <HoverBorderGradient
            containerClassName="rounded-full w-full mt-2"
            as="button"
            className=" dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
          >

            <span className='hover:text-[#7fcfec] duration-300 flex items-center justify-center gap-1'>Sign up<i className="ri-arrow-right-line"></i></span>
          </HoverBorderGradient>

        </form>

        <div className="flex items-center -mt-5 justify-center space-x-2">
          <div className="h-px w-20 bg-neutral-300"></div>
          <p className="text-neutral-500 text-md">OR</p>
          <div className="h-px w-20 bg-neutral-300"></div>
        </div>


        <Button
        containerClassName="w-full hover:bg-zinc-800"
          borderRadius="1.75rem"
          className="bg-white dark:bg-black/90 z-40 cursor-pointer text-black dark:text-white border-neutral-200 dark:border-slate-800 flex gap-3 hover:bg-zinic-900"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Sign Up with Google
        </Button>
        <p className="text-center text-md text-neutral-500">
          Already have an account? <a href="#" className="text-[#7fcfec] hover:underline duration-300">Log in</a>
        </p>
      </div>
<div className="absolute inset-0 -z-10">
    <BackgroundBeams />
  </div>
    </div>

  )
}

export default Signup
