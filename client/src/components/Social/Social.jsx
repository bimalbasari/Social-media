import { useSelector } from "react-redux";
import { selectUser } from "../../features/index";
import AddEvent from "./AddEvent";
import EventPage from "./EventPage";



const Social = () => {
    const user = useSelector(selectUser)
    return (
        <>
    
            <AddEvent user={user} />
            <EventPage />
            <EventPage />
            <EventPage />
            <EventPage />
        </>
    )
}

export default Social