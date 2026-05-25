import React from 'react'
import Dashboard from './Dashboard'
import { FaRegFolderOpen } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { MdOutlineEdit } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import Dashboardlayout from '../components/Dashboardlayout'

export default function Classassignment() {
  return (
    <Dashboardlayout>
    <div>

    <div>
      <h1 className="text-5xl font-bold">
    Hello Admin!
  </h1>
  <p className="text-lg text-gray-600">
    Welcome to GradGuid School Register System
  </p>
  </div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div class="bg-white rounded-lg shadow-md p-6 mt-6">
  <div class="flex gap-6 mt-6">
    <FaRegFolderOpen size={30} color='black'/>
    <h2 className="text-2xl font-bold">Add New Subject</h2>
  </div>
  <input type="text" placeholder="Subject Name" className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    <button className="w-full border-2 bg-green-400 text-white rounded-lg p-3 mt-6 flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colorsfont-semibold">Add Subject</button>
    </div>

    
    <div class="bg-white rounded-lg shadow-md p-6 mt-6">
  <div class="flex gap-6 mt-6">
    <RxPeople size={30} color='black'/>
    <h2 className="text-2xl font-bold">Add New Class</h2>
  </div>
  <input type="text" placeholder="Class Name" className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
   <strong><label>Select Subject for class</label></strong><br />
   <select name="gradeType" className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="Test">Test</option>
              <option value="Exam">Exam</option>
              <option value="Assignment">Assignment</option>
            </select>
    <button className="w-full border-2 bg-green-400 text-white rounded-lg p-3 mt-6 flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colorsfont-semibold">Add Class</button>
    </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      <table className="w-full mt-6 border-collapse border-2 border-gray-500 rounded-md">
        <thead className="bg-gray-200 border-2 border-gray-500 rounded-md">
          <tr className="bg-gray-200 border-b border-t border-r">
            <th className="border border-gray-300 p-2">Subject ID</th>
            <th className="border border-gray-300 p-2">Subject Name</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-2 border-gray-500 rounded-md">
          <tr>
            <td className="border border-gray-300 p-2">001</td>
            <td className="border border-gray-300 p-2">Math</td>
            <td className="flex gap-2">
              <button className="bg-gray-400 flex items-center justify-center p-2 rounded-md hover:bg-gray-500 w-full"><MdOutlineEdit size={20} color='black'/></button>
              <button className="bg-gray-400 flex items-center justify-center p-2 rounded-md hover:bg-gray-500 w-full"><BsTrash3 size={20} color='black'/></button>
            </td>
          </tr>
        </tbody>

      </table>


      <table className="w-full mt-6 border-collapse border-2 border-gray-500 rounded-md">
        <thead className="bg-gray-200 border-2 border-gray-500 rounded-md">
          <tr className="bg-gray-200 border-b border-t border-r">
            <th className="border border-gray-300 p-2">Class ID</th>
            <th className="border border-gray-300 p-2">Class Name</th>
            <th className="border border-gray-300 p-2">Associated Subjects</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border-2 border-gray-500 rounded-md">
          <tr>
            <td className="border border-gray-300 p-2">001</td>
            <td className="border border-gray-300 p-2">ss1 Science</td>
            <td className="border border-gray-300 p-2">Math, Chemistry</td>
            <td className="flex gap-2">
              <button className="bg-gray-400 flex items-center justify-center p-2 rounded-md hover:bg-gray-500 w-full"><MdOutlineEdit size={20} color='black'/></button>
              <button className="bg-gray-400 flex items-center justify-center p-2 rounded-md hover:bg-gray-500 w-full"><BsTrash3 size={20} color='black'/></button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
    </div>
    </Dashboardlayout>
  )
}
