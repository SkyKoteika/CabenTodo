import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import useBackend from "../../hooks/useBackend";
import Token from "../../models/token";
import User from "../../models/User";
import "./style.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state ? location.state : "/";
    const [, setUser] = useState<Token>();
    const backend = useBackend();
    
    const Login = useCallback(() => {backend.postSignIn(username, password).then(setUser)}, [username, password, backend]);
    const handleLogin = () =>{
        console.log(fromPage)
        Login();
        setTimeout( () => navigate(-1), 100);
    }

    return(
        <div className="Login" >
            <div className="LogConteiner">
                <h2>Sign In</h2>
                <p>Enter your username: </p>
                <input type="text" required  className="username" value={username} onChange={event => setUsername(event.target.value)}/>
                <p>Enter your password: </p>
                <input type="password" name="pwd" required value={password}  onChange={event => setPassword(event.target.value)} className="password" />
                <Link to="/signup" className="account">Don't have account? Click here</Link>
                <button className="signin" onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    )
}
export default LoginPage;