import { Link } from "react-router";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

let style = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
        marginBottom: '20px',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        marginRight: '20px',
        gap: '20px',
        padding: '0',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        fontSize: '20px',
    }
}
const Header = () => {
    const userOnlineStatus = useGetOnlineStatus();
    const { loggedinUser } = useContext(UserContext);
    const cart = useSelector((store)=> store.cart.items);
    console.log("------------------------------", cart);
    return (
        <header style={style.header}>
            <img src="https://img.icons8.com/?size=64&id=J2jsusRzJPrR&format=png" alt="Logo" className="logo" />
            <ul style={style.links}>
                <p>{userOnlineStatus ? "User Online 🟢 " : "User Offline 🔴"}</p>
                <Link to="/" key="1"><li>Home</li></Link>
                <Link to="/about" key="2"><li>About</li></Link>
                <Link to="/grocery" key="3"><li>Grocery</li></Link>
                <li>Contact</li>
                <Link to="/cart" key="4">Cart ({cart.length} items)</Link>
                <button>Login</button>
                <li>{loggedinUser}</li>
            </ul>
        </header>
    )
}
export default Header;