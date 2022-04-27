import { Link } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
    return(
        <div className="Login">
            <form action="login">
                <h2>Sign In</h2>
                <p>Enter your username: </p>
                <input type="text" required className="username" />
                <p>Enter your password: </p>
                <input type="password" name="pwd" required  className="password" />
                <Link to="/register" className="account">Don't have account? Click here</Link>
                <input type="submit" value="Sign In" className="signin" />
            </form>
        </div>
    )
}
export default LoginPage;