import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user/User"
import Home from "./components/home/LandingPage"
import './App.css'
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
