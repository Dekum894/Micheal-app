import React from 'react'
import { BsHouse, BsPersonFill, BsBook, BsBoxArrowRight } from 'react-icons/bs'
import {Link} from "react-router-dom";

export default function Sidebar() {
  const navItems= [
    {
    title: "Dashboard",
    link: "/dashboard",
    icon: <BsHouse size={24} />
    },

    {
    title: "Students",
    link: "/students",
    icon: <BsPersonFill size={24} />
    },

    {
    title: "Subjects",
    link: "/subjects",
    icon: <BsBook size={24} />
    },

    {
    title: "Logout",
    link: "/",
    icon: <BsBoxArrowRight size={24} />
    }
  ]
  
  return (
    <div className="flex flex-col gap-6 p-4 h-screen w-64 pl-4 text-black-800">
{navItems.map((item, index)=>(
  <Link to={item.link} key={index} className="hover:bg-green-800 rounded-md flex items-center gap-10 px-10 py-2">
    <span className="icon">{item.icon}</span>
    <span className="title">{item.title}</span>
  </Link>
))}
    </div> 
  )
}
