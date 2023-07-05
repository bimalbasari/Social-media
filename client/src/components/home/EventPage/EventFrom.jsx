import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { createPost } from '../../../services/Api';
import { selectUser } from "../../../features/index";

const NewEventForm = () => {
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
                await createPost(data,config);

                // setContent('');
                // setPicture("");
                // setPreviewURL("");
            } catch (err) {
            }
        }
    };

    return (
        <div className="bg-white  md:w-2/4 m-auto  h-full  border-double border-4 border-slate-700 mt-4 rounded-lg overflow-hidden p-2">
            <form onSubmit={handleSubmit}>
                <div className="border-b border-gray-400 pb-4">
                    <textarea
                        className=" resize-none bg-transparent focus:outline-none"
                        rows="4"
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
                {picture && (
                    <img
                        src={previewURL}
                        alt="User's Picture"
                        className="mt-2 m-auto w-32 h-32 object-contain"
                    />
                )}

                <div className="flex justify-end pt-4">
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

export default NewEventForm;
