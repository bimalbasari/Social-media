import { useSelector } from "react-redux";
import { selectUser, selectEvent } from "../../features/index";
import AddEvent from "./AddEvent";
import EventPage from "./EventPage";
import { fetchPost } from "../../services/Api";
import { useState, useEffect } from 'react';
import { addEvents } from "../../features/index";
import { useDispatch } from "react-redux";

const Social = () => {
    const user = useSelector(selectUser);
    const events = useSelector(selectEvent);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = `Bearer ${user.token}`;
                const data = await fetchPost(config);
                dispatch(addEvents(data));
            } catch (error) {
                // Handle error
            }
        };

        fetchData();
    },[] );

    // [user.token, dispatch]
    return (
        <>
            <AddEvent user={user} />
            {
                events.length > 0 && events.map((data, index) => <EventPage data={data} key={index + 1} />)
            }

        </>
    );
};

export default Social;
