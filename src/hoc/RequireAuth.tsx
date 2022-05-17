import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import User from "../models/User";

type AppChildren = {
    children: JSX.Element
}

const RequireAuth = (props: AppChildren) => {
const location = useLocation();
const user = useAuth();

if(!user){
    return <Navigate to="/signin" />
}


    return props.children;
}

export default RequireAuth;