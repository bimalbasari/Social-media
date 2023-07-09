import { HiPhoto } from "react-icons/hi2";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi"
import EventFrom from "./EventFrom";
import { useState } from "react";
const AddEvent = ({ user }) => {
    const [isFromOpen, setisFromOpen] = useState(false)

    const onEventAdd = () => {
        setisFromOpen(true)
    }

    return (
        <>
            {isFromOpen && <EventFrom setisFromOpen={setisFromOpen} />}
            <div className="bg-white  md:w-2/4 m-auto  h-32  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden"onClick={onEventAdd}>

                <div className=" flex items-center justify-center h-1/2 drop-shadow-lg">
                    {user && <img src={user.picture} alt="" className="max-w-1/5 h-10 mx-2 rounded-full" />}
                    <input type="text" name="" id="" placeholder="Start a post" className="w-3/4 h-10 rounded-xl p-2 border-gray-400 border-2 outline-0" />
                </div>
                <div className=" flex items-center justify-evenly h-1/2" >
                    <div className=" sm:flex items-center text-2xl text-blue-600 cursor-pointer  hover:bg-gray-200 p-4 rounded-lg drop-shadow-lg">
                        <HiPhoto />
                        <button className="text-base sm:block hidden sm:ml-2 ml-0 mt-0"> Photo</button>
                    </div>
                    <div className="sm:flex  items-center text-2xl text-pink-600 cursor-pointer  hover:bg-pink-100 p-4 rounded-lg drop-shadow-lg">
                        <BiSolidCalendarEvent />
                        <button className="text-base sm:block hidden sm:ml-2 ml-0 mt-0"> Event</button>
                    </div>
                    <div className=" sm:flex items-center text-2xl text-orange-600 cursor-pointer  hover:bg-orange-100 p-4 rounded-lg drop-shadow-lg">
                        <TfiWrite />
                        <button className="text-base sm:block hidden sm:ml-2 ml-0 mt-0">Article</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEvent;