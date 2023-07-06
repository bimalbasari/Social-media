
import { NavLink, Outlet } from "react-router-dom"

const Home = () => {

  return (
    <div>
      <header className="h-12 bg-slate-700 text-cyan-700  flex items-center ">
        <ul className='flex  items-center'>
          <li className="mx-3  ">
            <NavLink to="flatmate" className=" hover:drop-shadow  hover:text-cyan-400 duration-400 tracking-tighter" >Flats and Flatmates</NavLink>
          </li>
          <li className="mx-3">
            <NavLink  to="event" className="hover:drop-shadow hover:text-cyan-400 duration-400  tracking-tighter">Social Butterfly</NavLink>
          </li>
        </ul>
      </header>
      <Outlet/>
    </div>
  )
}

export default Home
