import { useSelector } from "react-redux";
import { selectUser } from "../../features/index";
import AddEvent from "./AddEvent";
import EventPage from "./EventPage";
import EventFrom from "./EventFrom";


const Social = () => {
    const user = useSelector(selectUser)
    return (
        <>
        <EventFrom/>
            <AddEvent user={user} />
            <EventPage />
        </>
    )
}

export default Social