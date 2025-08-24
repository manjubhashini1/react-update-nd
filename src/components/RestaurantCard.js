
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        id,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData;

 
    return (

        <div className="resCard">
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="burger" className="resCardImg" />
            <div className="resCardDetails" key={id}>
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <p>⭐{avgRating} stars</p>
                <p>{sla.deliveryTime} minutes</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;