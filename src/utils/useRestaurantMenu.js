import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(()=> {
       fetchData()
    }, [])

    const fetchData = async()=> {
        try {
            const data = await fetch(MENU_API_URL + resId);
            const json = await data.json();
            console.log("Menu API data", json);
            setRestaurantMenu(json.data);
        } catch (error) {
            console.log("Error while fetching menu data", error);
        }
    }

    return restaurantMenu;
}

export default useRestaurantMenu;