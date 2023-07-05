
import { NavLink } from "react-router-dom"
import EventHome from "./EventPage/EventHome"
import FlatmateHome from "./FlatmetePage/FalatmateHome";
import EventFrom from "./EventPage/EventFrom"

const LandingPage = () => {

  return (
    <div>
      <header className="h-12 bg-slate-200 text-cyan-700  flex items-center ">
        <ul className='flex  items-center'>
          <li className="mx-3  ">
            <NavLink className=" hover:drop-shadow  hover:text-cyan-400 duration-400 tracking-tighter" >Flats and Flatmates</NavLink>
          </li>
          <li className="mx-3">
            <NavLink className="  hover:drop-shadow hover:text-cyan-400 duration-400  tracking-tighter">Social Butterfly</NavLink>
          </li>
        </ul>
      </header>
      <EventFrom />
      <EventHome />
      <FlatmateHome />
    </div>
  )
}

export default LandingPage
