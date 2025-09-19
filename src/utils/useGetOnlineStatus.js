import { useEffect, useState } from "react";

const useGetOnlineStatus = () => {
    const [userOnline, setUserOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        const update = () => setUserOnline(window.navigator.onLine);
        window.addEventListener("online", update);
        window.addEventListener("offline", update);
        return () => {
            window.removeEventListener("online", update);
            window.removeEventListener("offline", update);
        };
    }, [userOnline]);

    return userOnline;
}

export default useGetOnlineStatus;