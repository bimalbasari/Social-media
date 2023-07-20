import { useState } from "react";
import { useSelector } from "react-redux";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { AiOutlineComment } from "react-icons/ai"
import { PiShareFatLight } from "react-icons/pi"
import { selectUser } from "../../features/index";;
import User from "../User/User";
import Comment from "./Comment";
import { likePost, getAllLike, getAllcomment } from "../../services/Api"


const EventPage = ({ data }) => {
    const user = useSelector(selectUser);
    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState(data.likes.length);
    const [comments, setComments] = useState(data.comments.length);
    const [commentBox, setCommentBox] = useState(false);


    const onLike = async () => {
        await likePost({ postId: data._id })
        setLike(true)
        if (like) { setLikes(likes => likes = likes + 1) }
    }
    const showLike = async () => {

    }
    const showComments = async () => {

    }

    const onComment = async () => {
        if (!commentBox) {
            setCommentBox(true)
        } else {
            setCommentBox(false)
        }
        
    }
    return (
        <div className="bg-white  md:w-2/4 m-auto  h-full  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden">
            {/* flatMate card header */}
            <User user={data.postBy} time={data.createdAt} />
            <div className="p-4">

                <p className="text-md leading-4 md:text-md md:leading-5 text-blue-600">{data.content}</p>
            </div>

            <div className="bg-yellow-200 max-w-4xl ">
                <img src={data.picture} alt="Post Image" />
            </div>
            <div>
                <div className="flex items-center justify-between px-12 border-b-2 m-1">
                    <div className="font-medium text-sm text-cyan-800  mx-2 cursor-pointer" onClick={showLike}>{likes}</div>
                    <div className="font-medium text-sm text-cyan-800  mx-2 cursor-pointer" onClick={showComments}>{comments}</div>
                    <div className="font-medium text-sm text-cyan-800  mx-2">@</div>
                </div>


                <div className="h-12 flex items-center justify-between px-12 ">
                    {/* Post like section */}
                    <div className="flex items-center cursor-pointer" onClick={onLike}>
                        <button className="font-bold text-xl text-cyan-800">
                            {like ? <FcLike /> : <FcLikePlaceholder />}
                        </button>
                        <span className="font-medium text-sm text-cyan-800  mx-2">Like</span>
                    </div>
                    {/* Post comment box */}
                    <div className="flex items-center cursor-pointer" onClick={onComment}>
                        <button className="font-bold text-xl text-cyan-800 ">{<AiOutlineComment />}  </button>
                        <span className="font-medium text-sm text-cyan-800  mx-2" >Comment</span>
                    </div>
                    <div className="flex items-center focus:outline-none disabled:opacity-25 cursor-pointer">
                        <button className="font-bold text-xl text-cyan-800 ">{<PiShareFatLight />}  </button>
                        <span className="font-medium text-sm text-cyan-800 disable mx-2 ">Repost</span>
                    </div>
                </div>
                {commentBox && <Comment user={user} data={data.comments} id={data._id} />}
            </div>

        </div>
    )
}

export default EventPage;
