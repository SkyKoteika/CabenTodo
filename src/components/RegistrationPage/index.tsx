
import { useState, useCallback } from "react";
import useBackend from "../../hooks/useBackend";
import User from "../../models/User";
import "./style.css";

const RegistrationPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState<User>();
    const backend = useBackend();
    // const handleLogin = useCallback(() => backend.postSignUp(username, email, password).then(setUser), [username, email, password]);
    const handleRegistration = useCallback(() => backend.postSignUp(username, email, password).then(setUser), [username, email, password]);

    return (
        <div className="Registration">
            <div>
            <h2>Registration: </h2>
            <p>Enter email: </p>
            <input type="email" required value={email} onChange={event => setEmail(event.target.value)} className="username" />
            <p>Enter username: </p>
            <input type="text" required className="username" value={username} onChange={event => setUsername(event.target.value)} />
            <p>Enter password: </p>
            <input type="password" name="pwd" required value={password} onChange={event => setPassword(event.target.value)} className="password" />
            {/* <input type="password" name="pwd" required className="pwdconfirm" /> */}
            <button className="registration" onClick={handleRegistration} >Create an Account</button>
            </div>
        </div>
    )
}
export default RegistrationPage;