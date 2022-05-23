import { SetStateAction, useState } from "react";
import useAuth, { AuthContext } from "../hooks/useAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import User from "../models/User";

type AppChildren = {
    children: JSX.Element
}

const AuthProvider = (props: AppChildren) => {
const [user, setUser] = useState<User>();

const login = (user: User) => {
    setUser(user);
}
const logout = () => {
    setUser(undefined);
}

const value = {user, login, logout}

return(
<AuthContext.Provider value={value}>
{props.children}
</AuthContext.Provider >
);
}

export default AuthProvider;