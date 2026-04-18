import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Subject from "./pages/Subject";



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/subject" element={<Subject/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
