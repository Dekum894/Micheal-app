import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Subject from "./pages/Subject";
import Studentform from "./pages/Studentform";
import Classassignment from "./pages/Classassignment";
import Enterscore from "./pages/Enterscore";



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/students" element={<Student/>}/>
      <Route path="/subjects" element={<Subject/>}/>
      <Route path="/studentform" element={<Studentform/>}/>
      <Route path="/classassignment" element={<Classassignment/>}/>
      <Route path="/enterscore" element={<Enterscore/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
