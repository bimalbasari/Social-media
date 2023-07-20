

import axios from "axios"
import { useEffect } from "react";
const Chats = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get("api/user/flatmate/chats")
        setChats(data)
    }


    useEffect(() => {
        const chats = fetchChats();

    }, [])
    return (<>from chats</>)
}

export default Chats
