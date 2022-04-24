
const LoginPage = () => {
    return(
        <div>
            <form action="login">
                <h2>Sign In</h2>
                <p>Enter your username: </p>
                <input type="text" required className="username" />
                <p>Enter your password: </p>
                <input type="password" name="pwd" className="password" />
                <input type="submit" value="Sign In" />
            </form>
        </div>
    )
}
export default LoginPage;