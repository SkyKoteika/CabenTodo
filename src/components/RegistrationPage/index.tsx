
import { useState, useEffect } from "react";
import useBackend from "../../hooks/useBackend";
import User from "../../models/User";
import "./style.css";

const RegistrationPage = () => {
    const [user, setUser] = useState<User>();
    const [username, setUsername] = useState("");

    const backend = useBackend();
    useEffect(() => {
        backend.postSignIn().then(setUser)
    });
    return(
        <div className="Registration">
            <form action="signUp">
                <h2>Registration: </h2>
                <p>Enter email: </p>
                <input type="email"  className="username" />
                <p>Enter username: </p>
                <input type="text" required className="username" value={username}/>
                <p>Enter password: </p>
                <input type="password" name="pwd" required className="password" />
                {/* <input type="confirmation" name="pwd" required className="password" /> */}
                <input type="submit" value="Create an Account" className="registration" />
            </form>
        </div>
    )
}
export default RegistrationPage;