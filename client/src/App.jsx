import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user/User"
import Home from "./components/home/LandingPage"
import './App.css'
import Navbar from "./components/Navbar";
import FlatmateHome from "./components/home/FlatmetePage/FalatmateHome";


function App() {

  return (
    <div>
<FlatmateHome />
<FlatmateHome />
<FlatmateHome />
<FlatmateHome />
<FlatmateHome />
<FlatmateHome />
<FlatmateHome />
    </div>
    
    // <BrowserRouter>
    //     <Navbar />
    //   <Routes>
    //     <Route path="/login" element={<User />} />
    //     <Route path="/" element={<Home />} />
    //   </Routes>

    // </BrowserRouter>
  )
}

export default App
