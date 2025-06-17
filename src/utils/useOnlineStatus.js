
import { useEffect, useState } from "react";

const useOnlineStatus = () => {


    const [OnlineStatus, setOnlineStatus] = useState(true);

    //  Check if online 

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])

    // bool value
    return OnlineStatus
}

export default useOnlineStatus;