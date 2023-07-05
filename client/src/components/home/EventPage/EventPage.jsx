import { SlLike } from "react-icons/sl"
import { AiOutlineComment } from "react-icons/ai"
import { PiShareFatLight } from "react-icons/pi"
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/index";
import User from "../../user/User";


const EventPage = () => {
    const user = useSelector(selectUser)

    return (
        <div className="bg-white  md:w-2/4 m-auto  h-full  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden">
            {/* flatMate card header */}
            <User user={user} />
            <div className="p-4">

                <p className="text-md leading-4 md:text-md md:leading-5 text-blue-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa, necessitatibus ad voluptatum sint odio sunt ipsa quibusdam, consequuntur saepe id doloremque. Praesentium nam aperiam atque, error recusandae assumenda alias!
                </p>
            </div>

            <div className="bg-yellow-200 max-w-4xl ">
                <img src="https://media.istockphoto.com/id/1365649825/photo/stylish-micro-apartment-for-one.jpg?s=1024x1024&w=is&k=20&c=ud_WjVjBsk1FTraUL4avh3ApSjSKsScu4ZH4JKRm6ds=" alt="" />
            </div>
            <div>
                <div className="flex items-center justify-between px-12 border-b-2 m-1">
                    <div className="font-medium text-sm text-cyan-800  mx-2 cursor-pointer">1990</div>
                    <div className="font-medium text-sm text-cyan-800  mx-2 cursor-pointer">1990</div>
                    <div className="font-medium text-sm text-cyan-800  mx-2">NAN</div>
                </div>
                <div className="h-12 flex items-center justify-between px-12 ">
                    <div className="flex items-center cursor-pointer">
                        <button className="font-bold text-xl text-cyan-800 ">{<SlLike />}  </button>
                        <span className="font-medium text-sm text-cyan-800  mx-2">Like</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <button className="font-bold text-xl text-cyan-800 ">{<AiOutlineComment />}  </button>
                        <span className="font-medium text-sm text-cyan-800  mx-2">Comment</span>
                    </div>
                    <div className="flex items-center focus:outline-none disabled:opacity-25 cursor-pointer">
                        <button className="font-bold text-xl text-cyan-800 ">{<PiShareFatLight />}  </button>
                        <span className="font-medium text-sm text-cyan-800 disable mx-2 ">Repost</span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default EventPage;
