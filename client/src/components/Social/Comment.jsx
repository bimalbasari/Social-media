import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { commentPost } from "../../services/Api";


const Comment = ({ user, data, id }) => {

    const [comment, setComment] = useState("")
    const config = `Bearer ${user.token}`;


    const onCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleComment = async (e) => {
        e.preventDefault();
        const commentData = {
            comment,
            postId: id
        }
        await commentPost(commentData, config)

        setComment("")
    }

    return (
        <div className="bg-white text-center mt-1" >
            <form className=" py-2 flex items-center justify-center " onSubmit={handleComment}>
                <input type="text" onChange={onCommentChange} value={comment} placeholder="Add a comment..." className="w-4/5 h-8 rounded-xl p-4  bg-yellow-100 focus:outline-none" />
                <button className="text-green-400 text-3xl"><BiSolidSend /></button>
            </form>
            <ul className="bg-green-100 p-2 text-left" >
                {data.map((comment, index) => (
                    <li className="flex items-center my-3" key={index}>
                        <img src={comment.user.picture} alt="" className="w-8 rounded-full object-cover mx-1" />
                        <div className="flex flex-col w-4/5">
                            <span className=" font-bold text-sm capitalize ">{`${comment.user.firstName} ${comment.user.lastName}`}</span>
                            <span className="mx-2 font-light text-blue-700 w-3/4">{comment.message}</span>
                        </div>
                        <button className="bg-green-400 px-2 py-0 rounded-xl text-white mx-2">Reply</button>
                    </li>

                ))}



            </ul>
        </div>
    )
}

export default Comment

{/* <li className="flex items-center my-3 " key={index}>
<img src={comment.user.picture} alt="" className="w-8 rounded-full object-cover mx-1" />
<span className="mx-2 font-extralight text-blue-700 w-3/4">{comment.message}</span>
<button className="bg-green-400 px-2 py-0 rounded-xl text-white mx-2">Reply</button>
</li> */}