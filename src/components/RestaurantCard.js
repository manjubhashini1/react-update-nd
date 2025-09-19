import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        id,
        name,
        avgRating,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        sla,
    } = resData;



    return (

        <div className="resCard">
            {/* <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="burger" className="resCardImg" /> */}
            <div className="resCardDetails" key={id}>
                <img
                    className="resCardImg"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <p>⭐{avgRating} stars</p>
                <p>{sla.deliveryTime} minutes</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

export const DealsCard = (RestaurantCard) => {
    console.log("DealsCard", RestaurantCard);
    return (props) => {
        console.log("DealsCard props", props);
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    {props.resData?.aggregatedDiscountInfoV3?.header + " " + props.resData?.aggregatedDiscountInfoV3?.subHeader }
                </label>
                <RestaurantCard {...props} />

            </div>
        )
    }
}

export default RestaurantCard;