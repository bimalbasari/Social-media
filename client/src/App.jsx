import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user/User"
import Home from "./components/home/LandingPage"
import Footer from "./components/Footer/Footer"
import './App.css'
import Navbar from "./components/Navbar";
import FlatmateHome from "./components/home/FlatmetePage/FalatmateHome";
import EventPageHome from "./components/home/EventPage/EventPageHome";


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
