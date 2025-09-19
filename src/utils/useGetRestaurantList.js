import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useGetRestaurantList = () => {
    console.log("component mounted")
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            try {
            const data = await fetch(API_URL);
            const json = await data.json();
            if(!ignore) setApiData(json); //if componnet is still mounted then only update the state
            console.log("from hook  api");
            } catch (err) {
                if(!ignore) setError(err);
                console.log(err);
            }
        }
        fetchData();
        console.log("component mounted - fetch called")
        return ()=> {ignore = true; console.log("component unmounted - cleanup")}
    }, []);


     
    return apiData;
}


export default useGetRestaurantList;