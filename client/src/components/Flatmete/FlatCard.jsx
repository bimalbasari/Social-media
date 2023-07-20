
import Carousel from "../Item/Carousel";
import User from "../User/User";


let image = [
    "https://media.istockphoto.com/id/1365649825/photo/stylish-micro-apartment-for-one.jpg?s=1024x1024&w=is&k=20&c=ud_WjVjBsk1FTraUL4avh3ApSjSKsScu4ZH4JKRm6ds=",
    "https://media.istockphoto.com/id/1369517702/photo/dining-room-with-wooden-table-and-floor-in-modern-apartment.jpg?s=1024x1024&w=is&k=20&c=eHop8miGDMAaPzGbIeHlSDlX51nenvxP4AwxcLfPGfw=",
    "https://media.istockphoto.com/id/1460530527/photo/light-living-room-interior-with-eating-table-and-couch-panoramic-window.jpg?s=1024x1024&w=is&k=20&c=4cNrGiMFoG7Gaxxy7P_bN6_qAhYoPboWb9UxSmBl4A4="
]

const FlatCard = ({ data }) => {
    console.log(data)

    return (
        <div className="bg-white  md: md:w-2/4 m-auto  h-full  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden">
            {/* flatMate card header */}
            <User user={data.owner} />

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

export default FlatCard