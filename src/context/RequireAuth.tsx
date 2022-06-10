import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./Auth/useAuth";

type AppChildren = {
    children: JSX.Element
}

const RequireAuth = (props: AppChildren) => {
const location = useLocation();
const user = useAuth();

if(!user){
    return <Navigate to="/signin" state={{from: location.pathname}} replace/>
}

    return props.children;
}

export default RequireAuth;