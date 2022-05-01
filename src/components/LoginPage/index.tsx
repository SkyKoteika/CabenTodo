import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import User from "../../models/User";
import "./style.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState<User>();
    const backend = useBackend();
    const handleLogin = useCallback(() => backend.postSignIn(username, password).then(setUser), [username, password]);

    return(
        <div className="Login" >
                <h2>Sign In</h2>
                <p>Enter your username: </p>
                <input type="text" required  className="username" value={username} onChange={event => setUsername(event.target.value)}/>
                <p>Enter your password: </p>
                <input type="password" name="pwd" required  className="password" />
                <Link to="/signup" className="account">Don't have account? Click here</Link>
                <button onClick={handleLogin}>Sign In</button>
        </div>
    )
}
export default LoginPage;