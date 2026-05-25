import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsEnvelope, BsBell, BsPersonCircle } from "react-icons/bs";
// import Dashboard from './Dashboard'
// import Login from './login'

export default function Login() {
  return (

    <div>
     <nav class="flex justify-end mt-2">
      <div className="flex items-center gap-3 pr-2">
    <BsBell size={22} color="black" />
    <BsEnvelope size={22} color="black" />

    <div className="flex items-center gap-1 cursor-pointer border-2 bg-white-500 ">
      <img
        src="/profile_photo.png"
        alt="profile"
        className="w-9 h-9 rounded-full object-cover border-2 border-white/60"
      />
      <MdOutlineArrowDropDown size={22} color="black" />
    </div>
  </div>
  </nav>

  <form className="main-h-screen flex items-center justify-center">
    <div className="w-96 mx-auto mt-20 p-6 bg-white rounded-lg shadow-md flex flex-col">
      <BsPersonCircle size={50} color="#085239" className="items-center mx-auto" />
      <div className="text-center mb-6">
      <h2 className="text-[#085239] font-medium text-lg">GradGuid School Register</h2>
      <h1 className="text-[#085239] text-3xl font-bold">SCHOOL LOGIN</h1>
      </div>
      <span>Student ID</span>
      <input type="text" placeholder="Enter your student ID" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 bg-white hover:border-[#085239]" />
      <span>Password</span>
      <input type="password" placeholder="Enter your password" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 bg-white hover:border-[#085239]" />
      <button type="submit" className="bg-[#085239] text-white py-2 px-4 rounded-md hover:bg-[#064634]">Login</button>
      <span className="text-sm text-gray-600 mt-2 block text-center">Forget Password?</span>
      <hr className="border-gray-300 my-4" />
      <h4 className="text-center">Dont have an account? <a href="#" className="text-[#085239] hover:underline font-bold text-sm">Contact Administrator</a></h4>
    </div>
  </form>
    </div>
  )
}
