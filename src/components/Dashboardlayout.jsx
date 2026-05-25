import React from 'react'
import TopNav from './Topnav'
import Sidebar from './Sidebar'
import Border from './Border'

export default function Dashboardlayout({children}) {
  return (
    <div class="w-full ">
      
        <TopNav/>
        <div class="flex gap-6 p-4">
        <Sidebar/>
        {/* <Border/>  */}
        <div className="border-none bg-[#d0e4db] w-4/5 rounded-[15px] h-[90vh] overflow-y-scroll p-[30px]">
        {children}
        </div>
        </div>
    </div>
  )
}
