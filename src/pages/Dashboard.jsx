import React from 'react'
import { BsBarChartFill, BsPersonCircle } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import Dashboardlayout from '../components/Dashboardlayout'


export default function Dashboard() {

  
  return (
    
<Dashboardlayout>
<div>
  <h1 className="text-5xl font-bold">
    Hello Admin!
  </h1>
  <p className="text-lg text-gray-600">
    Welcome to GradGuid School Register System
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-sm font-semibold text-grey-500 uppercase tracking-wide">TOTAL STUDENTS</h3>
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
    <span className="text-4xl font-bold">1,234 </span>
    <FaArrowTrendUp size={18} color="grey" />
    </div>
    <BsBarChartFill size={50} color="grey" />
    </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl">ACTIVE STUDENTS</h3>
    <div className="flex items-center justify-between mt-2">
    <span className="text-4xl font-bold">12 </span>
    <BsPersonCircle size={50} color="grey" />
    </div>
    <input type="range" className="w-full mt-4 accent-green-200" value="80" max="100" readOnly/>
    </div>

<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-sm font-semibold text-grey-500 uppercase tracking-wide">PENDING RESULTS</h3>
    <div className="flex items-center justify-between mt-2">
    <span className="text-4xl font-bold">5 </span>
    <IoNewspaperOutline size={50} color="grey" />
    </div>
  </div>
 </div>
  </div>


  <div className="gap-6 flex justify-end position-fixed">
    <div className="bg-blue-500 text-white rounded-lg shadow-md p-3 mt-6 flex items-center justify-center cursor-pointer hover:bg-green-300 transition-colors">
    <button className="font-semibold"><a href="/studentform">+ ADD NEW STUDENT</a></button>
  </div>

  <div className="border-2 border-black bg-white rounded-lg p-3 mt-6 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
    <button className="font-semibold"><a href="/classassignment">CLASS ASSIGNMENT</a></button>
  </div>

  <div className="border-2 bg-red-400 text-white rounded-lg p-3 mt-6 flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
    <button className="font-semibold"><a href="/enterscore">ENTER SCORE</a></button>
  </div>
  </div>
</Dashboardlayout>
  )
}
