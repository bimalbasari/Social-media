
import Carousel from "../../item/Carousel";
import User from "../../user/User";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/index";

let image = [
    "https://media.istockphoto.com/id/1365649825/photo/stylish-micro-apartment-for-one.jpg?s=1024x1024&w=is&k=20&c=ud_WjVjBsk1FTraUL4avh3ApSjSKsScu4ZH4JKRm6ds=",
    "https://media.istockphoto.com/id/1369517702/photo/dining-room-with-wooden-table-and-floor-in-modern-apartment.jpg?s=1024x1024&w=is&k=20&c=eHop8miGDMAaPzGbIeHlSDlX51nenvxP4AwxcLfPGfw=",
    "https://media.istockphoto.com/id/1460530527/photo/light-living-room-interior-with-eating-table-and-couch-panoramic-window.jpg?s=1024x1024&w=is&k=20&c=4cNrGiMFoG7Gaxxy7P_bN6_qAhYoPboWb9UxSmBl4A4="
]

const FlatmateHome = () => {
    const user = useSelector(selectUser)
    return (
        <div className="bg-white  md: md:w-2/4 m-auto  h-full  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden">
            {/* flatMate card header */}
            <User user={user} />
            {/* <div className="bg-white  drop-shadow-lg flex  items-center rounded-sm">
                <div className="h-16 w-20 flex items-center justify-center">
                    <img src="./logo.jpg" alt="" className="h-14  w-auto rounded-full"  />
                </div>
                <div className="flex items-center justify-between flex-1 px-2">
                    <div className=" antialiased ">
                        <h2 className="text-base font-bold leading-5 text-slate-700">John deo</h2>
                        <p className="text-sm font-medium  leading-4 text-slate-600">Abc aperment</p>
                        <p className="text-xs  leading-3 text-slate-500">WestBengal kolkata</p>
                    </div>
                    <div className="w-52">
                        <button className="bg-slate-300 hover:bg-blue-500 hover:text-white  w-10/12 rounded-lg p-2">Chat</button>
                    </div>
                </div> 

            </div>*/}

            <div className="py-2">
                <div className="h-1/3 text-center md:text-3xl text-xl font-bold text-slate-500 p-1">Basic Info</div>
                <div className="md:flex text-center justify-evenly border-slate-400 border-t">
                    <div className="border-r border-l border-slate-300 px-4 py-2"><span className="block text-slate-600 border-b border-slate-400 ">Gender</span><span className="block text-slate-500">male</span></div>
                    <div className="border-r border-l border-slate-300 px-4 py-2"><span className="block text-slate-600 border-b border-slate-400 ">Aprox Rent</span><span className="block text-slate-500"> &#x20B9;8000</span></div>
                    <div className="border-r border-l border-slate-300 px-4 py-2"><span className="block text-slate-600 border-b border-slate-400 ">Occupancy</span><span className="block text-slate-500">male</span></div>
                    <div className="border-r border-l border-slate-300 px-4 py-2"><span className="block text-slate-600 border-b border-slate-400 ">Loking For</span><span className="block text-slate-500">male</span></div>

                </div>
            </div>
            {/* flatmate card Body */}

            <div className="bg-yellow-200 max-w-4xl ">
                <p className="h-1/3  md:text-xl text-md font-bold text-slate-500 p-1">Pictures</p>
                <Carousel >
                    {image.map(r => (
                        <img src={r} key={r + "image"} />
                    ))}

                </Carousel>
            </div>

            <div className="p-4">
                <p className="text-base font-bold leading-5 text-slate-700 border-b p-1" >Description :-</p>
                <p className="text-md leading-4 md:text-md md:leading-5 text-blue-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa, necessitatibus ad voluptatum sint odio sunt ipsa quibusdam, consequuntur saepe id doloremque. Praesentium nam aperiam atque, error recusandae assumenda alias!
                </p>
            </div>
        </div>
    )
}

export default FlatmateHome