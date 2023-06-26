



import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import AddListing from './AddListing';
const Navbar = () => {
  const [listing, setListing] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white px-6 shadow md:flex md:items-center md:justify-between">
        <div>
          <span className='text-2xl font-[Poppins]'>
            <img src="./logo.jpg" alt="Logo" className='h-10 inline rounded-full' />
            Social-Media
          </span>
          <span className='text-3xl cursor-pointer mx-2 md:hidden'>
            =
          </span>
        </div>
        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py:0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0'>
          <li className="mx-4 my-6 md:my-0">
            <NavLink className="text-xl hover:text-cyan-400 duration-500" >My Team</NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <button className="text-xl hover:text-cyan-400 duration-500 border-none" onClick={() => {
              setListing(true)
            }} >Add listing</button>

          </li>
          <li className="mx-4 my-6 md:my-0">
            <img src="./logo.jpg" alt="Logo" className='h-10 inline rounded-full' />
          </li>
        </ul>

      </nav>

      {listing && <div className='mt-6'><AddListing setListing={setListing} /> </div>}

    </div>
  );
};

export default Navbar;
