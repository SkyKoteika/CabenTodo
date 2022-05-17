import { createContext, useContext } from "react";
import { getCookie } from "../components/cookies/cookie";
import User from "../models/User";
import useBackend from "./useBackend";


interface UserContext {
  user: User | undefined;
}

const checkCookie = () => {
    let token = getCookie("token");
    if (token !== null) {
      return token;
    } else {
      return undefined;
    }
  }

export const AuthContext = createContext<UserContext>({ user: undefined });

const useAuth = async (): Promise<User> => {
  const context = useContext(AuthContext);
  const backend = useBackend();
  const token = checkCookie();
  if(token!==undefined){
      context.user = await backend.postCheckUser();
  }else{
    context.user = undefined;
  }
  // const [token, setToken] = useLocalStorage({} , 'user');
  // const user = backend.postCheckUser(JSON.parse(token))
  return context.user!;
};

export default useAuth;
