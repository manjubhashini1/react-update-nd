import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import useGetRestaurantList from "../utils/useGetRestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";
import { DealsCard } from "./RestaurantCard";

const Body = () => {

    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const apiData = useGetRestaurantList();
    const userOnlineStatus = useGetOnlineStatus();

    const RestaurantCardPromoted = DealsCard(RestaurantCard);

    useEffect(() => {
        const cards = apiData?.data?.cards;
        if (!cards) return;          //  guard before slice
        const restaurants = cards.slice(3); // skip first 3
        setListofRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }, [apiData]);

    console.log("filteredRestaurants", filteredRestaurants);

    const filterTopRatedRestaurants = () => {
        const filter = listofRestaurants.filter((res) => (res.card.card.info.avgRating > 4.2));
        console.log("filter rating", filter);
        setFilteredRestaurants(filter)
    }

    const searchData = () => {
        const search = listofRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log("searchText", search);
        setFilteredRestaurants(search);
    }

    if (!userOnlineStatus) return <h1 className="flex items-center align-middle justify-center">🔴 Offline, Please check your internet connection!!</h1>

    return listofRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body-container">
            <div className="filter-section">
                <div className="search-section">
                    <input type="text"
                        className="search-input border-2 p-2"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') searchData() }}
                    />
                    <button className="search-btn" onClick={() => searchData()}>Search</button>
                </div>
                <button onClick={() => filterTopRatedRestaurants()}>Top recommended</button>
            </div>
            <div className="resCardList">
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant.card.card.info.id} key={restaurant.card.card.info.id}>
                        {restaurant.card?.card?.info?.aggregatedDiscountInfoV3 ? (<RestaurantCardPromoted resData={restaurant.card.card.info} />) :
                            (<RestaurantCard resData={restaurant.card.card.info} />)}
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Body