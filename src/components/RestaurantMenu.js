import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { useContext } from "react";
import UserContext from "../utils/userContext";


import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const apiData = useRestaurantMenu(resId);
    console.log("resId", resId);
    const [menuList, setMenuList] = useState([]);
    //to make accordion controlled component we can handle it here and pass it to ItemList component
    const [accordionShowIndex, setAccordionShowIndex] = useState(null);
    const {loggedinUser} = useContext(UserContext);


    const { name, city, areaName, avgRating, costForTwoMessage, cuisines } = apiData?.cards[2]?.card?.card?.info || {};

    let fetchedMenu = apiData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
        return item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    useEffect(() => {
        if (fetchedMenu) {
            setMenuList(fetchedMenu);
        }
    }, [apiData])

    console.log("MenuList", menuList);



    if (apiData === null) return <Shimmer />
    return (
        <div className="mx-120">
            <div className="flex flex-col border-2 p-5 my-10 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1>{name}</h1>
                        <h2>{city}, {areaName}</h2>
                        <h1>{loggedinUser}</h1>
                    </div>
                    <div>
                        <h2>Star Rating: {avgRating}</h2>
                        <h2>Cuisines: {cuisines}</h2>
                        <div>{costForTwoMessage}</div>
                    </div>
                </div>
            </div>
            <div className="accordion-container">
                {menuList.map((item, index) => (
                    <div key={index}>
                        <ItemList
                            items={item.card?.card?.itemCards}
                            title={item.card?.card?.title}
                            expandAccordion={index === accordionShowIndex}
                            onToggle={() =>
                                setAccordionShowIndex((prev) => (prev === index ? null : index))
                            }
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;