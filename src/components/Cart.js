import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=> {
        dispatch(clearCart())
    }
    return (
        <div className="flex flex-col m-25">
            <button onClick={handleClearCart}>Clear Cart</button>
            {cartItems.map((item, index) => (
                <div className="flex border-b-gray-400 border-b-2 py-5 gap-5" key={index}>
                    <div className="w-10/12">
                        <h1 className="text-lg font-bold">{item.card?.info?.name}</h1>
                        <h2 className="text-sm text-green-500 font-bold">₹ {item.card?.info?.price / 100}</h2>
                        <h1 className="line-clamp-2">{item.card?.info?.description}</h1>
                    </div>
                    <div className="w-2/12 relative">
                        <img src={CDN_URL + item.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart;