import { useContext } from "react";
import UserContext from "../utils/userContext";

const About = () => {
    const {loggedinUser, setUserName} = useContext(UserContext);
    return (
        <div className="flex flex-col items-center justify-center align-middle">
        <input type="text" 
        placeholder="Enter something" 
        className="border-2 p-2 m-5"
        value={loggedinUser}
        onChange = {(e) => setUserName(e.target.value)}
        />
        </div>
    )
}

export default About;