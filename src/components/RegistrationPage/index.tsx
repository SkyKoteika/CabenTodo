
import "./style.css";

const RegistrationPage = () => {


    return(
        <div className="Registration">
            <form action="registration">
                <h2>Registration: </h2>
                <p>Enter email: </p>
                <input type="email"  className="username" />
                <p>Enter username: </p>
                <input type="text" required className="username" />
                <p>Enter password: </p>
                <input type="password" name="pwd" required className="password" />
                {/* <input type="confirmation" name="pwd" required className="password" /> */}
                <input type="submit" value="Create an Account" className="registration" />
            </form>
        </div>
    )
}
export default RegistrationPage;