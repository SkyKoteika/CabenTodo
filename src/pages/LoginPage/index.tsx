import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Paper from "../../components/Paper";
import useAuth from "../../context/Auth/useAuth";

import "./style.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = useCallback(() => {auth.login(username, password); navigate("/profile",{replace: true})}, [username, password, auth, navigate]);

  return (
    <div className="login-page">
    <Paper className="login-paper">
      <div className="LogConteiner">
        <h2>Sign In</h2>
        <p>Enter your username: </p>
        <input
          type="text"
          required
          className="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <p>Enter your password: </p>
        <input
          type="password"
          name="pwd"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="password"
        />
        <Link to="/signup" className="account">
          Don't have account? Click here
        </Link>
        <Button variant="primary" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </Paper>
    </div>
  );
};
export default LoginPage;
