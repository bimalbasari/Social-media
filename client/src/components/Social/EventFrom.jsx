import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { createPost } from '../../services/Api';
import { selectUser } from "../../features/index";
import { GrFormClose } from "react-icons/gr"
import { useForm } from "react-hook-form";

const EventForm = ({ setisFromOpen }) => {
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState("");
    const [previewURL, setPreviewURL] = useState(null);
    const user = useSelector(selectUser)
 
    const handleContentChange = (event) => {
        setContent(event.target.value);
    };
    const handlePictureChange = (e) => {

        let selectedPicture = e.target.files[0]
        setPicture(selectedPicture);

        if (selectedPicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewURL(reader.result);
            };
            reader.readAsDataURL(selectedPicture);
        }


    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform your logic to submit the new post
        if (content || picture) {
            const data = { content, picture }
            try {

                await createPost(data);

                // setContent('');
                // setPicture("");
                // setPreviewURL("");
                setisFromOpen(false);
            } catch (err) {
            }
        }
    };
    const onEventAdd = () => {
        setisFromOpen(false);

    }

    return (
        <div className=" backdrop-blur-sm bg-black/30  w-full sm:h-screen h-full   absolute z-20 top-16 flex items-center justify-center ">

            <form onSubmit={handleSubmit} className="bg-white  rounded-lg  p-4 md:w-2/4 md:h-4/5 w-full h-full  m-auto">

                <div className="flex justify-end" ><span onClick={onEventAdd}><GrFormClose /></span></div>

                <div className="p-1">
                    <textarea
                        className=" resize-none sm:h-20 h-12 border-1 border-gray-400  focus:outline-none first-letter:capitalize "
                        rows="2"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={handleContentChange}></textarea>
                </div>

                <div className="flex items-start border-b border-gray-200 sm:p-1 w-full sm:h-3/5 h-2/4">

                    <label className=" w-full h-full cursor-pointer  text-blue-400  object-cover ">
                    Add picture
                        <input type="file" className="hidden " onChange={handlePictureChange} />
                        <img src={previewURL ? previewURL : "../dummy.png"}  className='w-full h-full' />
                      
                    </label>

                </div>

                <div className="flex justify-end pt-4 mt-4 pl-3">
                    <button
                        type="submit"
                        className="sm:px-4 sm:py-2 p-1 bg-green-600 text-white rounded hover:bg-green-400"
                    >
                        Post
                    </button>
                </div>

            </form>
        </div>
    );
};

export default EventForm;
