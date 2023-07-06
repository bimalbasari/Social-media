import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Resister from "./components/User/Resister";
import Home from "./components/Home/Home";
import Social from "./components/Social/Social";
import Flatmate from "./components/Flatmete/Flatmate";
import Footer from "./components/Footer/Footer";

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Resister />} />
        <Route path="/home/" element={<Home/>} >
          <Route path="event" element={<Social/>}/>
          <Route path="flatmate" element={<Flatmate/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
