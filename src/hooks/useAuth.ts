import { createContext, useContext } from "react";
import { checkCookie, getCookie } from "../components/cookies/cookie";
import User from "../models/User";
import useBackend from "./useBackend";


interface UserContext {
  user: User | undefined;
}



export const AuthContext = createContext<UserContext>({ user: undefined });

const useAuth = (): User => {
  const context = useContext(AuthContext);
  const backend = useBackend();
  const token = checkCookie("accessToken");
  if(token!==undefined){
    backend.postCheckUser().then(response => {
      context.user = response;
    })
  }else{
    context.user = undefined;
  }
  return context.user!;
};

export default useAuth;
