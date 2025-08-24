import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {

    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("filteredRestaurants", filteredRestaurants);

    const filterTopRatedRestaurants = () => {
        const filter = listofRestaurants.filter((res)=> (res.info.avgRating > 4.2));
        console.log("filter rating", filter);
        setFilteredRestaurants(filter)
    }

    const searchData = () => {
        const search = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log("searchText", search);
        setFilteredRestaurants(search);
    }

    return (
        <div className="body-container">
            <div className="filter-section">
                <div className="search-section">
                    <input type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={()=>searchData()}>Search</button>
                </div>
                <button onClick={()=>filterTopRatedRestaurants()}>Top recommended</button>
            </div>
            <div className="resCardList">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />

                ))}
            </div>
        </div>
    )
}

export default Body