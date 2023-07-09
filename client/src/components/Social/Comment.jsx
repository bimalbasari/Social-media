import { BiSolidSend } from "react-icons/bi"
const Comment = ({setComment}) => {
    return (
        <div className="bg-white text-center mt-1" >
            <form className=" py-2 flex items-center justify-center ">
                <input type="text" placeholder="Add a comment..." className="w-4/5 h-8 rounded-xl p-4  bg-yellow-100 focus:outline-none" />
                <button className="text-green-400 text-3xl"><BiSolidSend /></button>
            </form>
            <ul className="bg-green-100 p-2 text-left" >
                <li className="flex items-center my-3 ">
                    <img src="../dummy-user.jpg" alt="" srcset="" className="w-8 rounded-full object-cover mx-1"/>
                    <span className="mx-2 font-extralight text-blue-700 w-3/4">Lorem ipsum dolor sit amet.</span>
                    <button className="bg-green-400 px-2 py-0 rounded-xl text-white mx-2">Reply</button>
                 </li>
                <li className="flex items-center my-3 ">
                    <img src="../dummy-user.jpg" alt="" srcset="" className="w-8 rounded-full object-cover mx-1"/>
                    <span className="mx-2 font-extralight text-blue-700 w-3/4">Lorem ipsum dolor sit amet.</span>
                    <button className="bg-green-400 px-2 py-0 rounded-xl text-white mx-2">Reply</button>
                 </li>
               
            </ul>
        </div>
    )
}

export default Comment