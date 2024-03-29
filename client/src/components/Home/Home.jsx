
import { NavLink, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/index";

const Home = () => {
  const user = useSelector(selectUser)
  return (
    <div>
      <header className="h-12 bg-white mt-1 text-cyan-700  flex items-center ">
        <ul className='flex  items-center'>
          <li className="mx-3  ">
            <NavLink to="flatmate" className=" hover:drop-shadow  hover:text-cyan-400 duration-400 tracking-tighter" >Flats </NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="event" className="hover:drop-shadow hover:text-cyan-400 duration-400  tracking-tighter">Events</NavLink>
          </li>
        </ul>
      </header>
          <Outlet />
    </div>
  )
}

export default Home
