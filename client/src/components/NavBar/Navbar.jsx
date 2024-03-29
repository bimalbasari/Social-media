import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddFlat from "../Flatmete/AddFlat";
import { selectUser } from "../../features/index";
import { useDispatch } from "react-redux";
import PlacesFormPage from "../Flatmete/PlacesFormPage";

const Navbar = () => {
  const [listing, setListing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const navgate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navgate("/login");
    } else {
      navgate("/home");
    }
  }, [user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-sky-400  px-4  h-16 shadow md:flex md:items-center md:justify-between">
        <div className="h-10">
          <span
            className="text-3xl font-bold h-10 text-pink-600 "
            style={{ fontFamily: "'Alex Brush', cursive" }}
          >
            Butterfly
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden">=</span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute text-white font-semibold w-full left-0 md:w-auto md:py:0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0">
          <li className="mx-3  md:my-0">
            <NavLink className=" hover:text-cyan-400 duration-500 tracking-tighter">
              Event +
            </NavLink>
          </li>
          <li className="mx-3  md:my-0">
            <button
              className=" hover:text-cyan-400 duration-500 border-none tracking-tighter"
              onClick={() => {
                setListing(true);
                if (listing) {
                  setListing(false);
                }
              }}
            >
              Flat +
            </button>
          </li>
          <li className="text-md font-[Poppins]">
            <img
              src={user ? user.picture : "../dummy-user.jpg"}
              className=" h-8 w-8 inline rounded-full object-fill mx-1"
            />
            <span>{user ? user.firstName : "User"}</span>
          </li>
        </ul>
      </nav>

      {listing && (
        <div className="  bg-yellow-200  h-full p-6 shadow w-full absolute z-10 ">
          <PlacesFormPage setListing={setListing} user={user} />{" "}
        </div>
      )}
    </div>
  );
};

export default Navbar;
