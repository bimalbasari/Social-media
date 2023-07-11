import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { createPost } from '../../services/Api';
import { selectUser } from "../../features/index";
import { GrFormClose } from "react-icons/gr"


const EventForm = ({setisFromOpen}) => {
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState("");
    const [previewURL, setPreviewURL] = useState('');
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
                const config = `Bearer ${user.token}`;
                await createPost(data, config);

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
        <div className=" bg-black bg-transparent w-full md:h-screen   absolute z-20 m-auto flex items-center justify-center ">

            <form onSubmit={handleSubmit} className="bg-white border-double border-4 border-slate-700 rounded-lg overflow-hidden p-4 md:w-2/4 md:h-4/5 ">
                <div  className="flex justify-end" ><span onClick={onEventAdd}><GrFormClose /></span></div>
                <div className="border-b border-gray-400 pb-4">
                    <textarea
                        className=" resize-none bg-transparent focus:outline-none first-letter:capitalize font-sarif w-full"
                        rows="3"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={handleContentChange}></textarea>
                </div>
                <div className="flex items-start border-b border-gray-200 p-1">
                    <input
                        type="file"
                        id="picture"
                        className="border border-gray-300 rounded-md w-full p-3 "
                        onChange={handlePictureChange}
                    />
                </div>
                <div className='mt-2 h-2/4'>
                    <img
                        src={previewURL ? previewURL : "../dummy.png"}
                        alt="User's Picture"
                        className="object-contain m-auto w-4/5 h-full"
                    />

                </div>
                <div className="flex justify-end pt-4 pl-3">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
