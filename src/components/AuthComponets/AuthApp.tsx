
import { Route, Routes } from 'react-router-dom';


type AuthApp = {
  children: JSX.Element
}

const AuthApp = (props: AuthApp) => {
  return (
    <div className="AuthPage">
      <div className="main-content">
        {props.children}
      </div>
    </div>
  );
}

export default AuthApp;