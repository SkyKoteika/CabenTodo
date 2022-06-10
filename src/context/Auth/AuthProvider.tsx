import { useCallback, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { AuthContext } from "./useAuth";
import useBackend from "../../hooks/useBackend";
import User from "../../models/User";

type AppChildren = {
  children: JSX.Element;
};

const AuthProvider = (props: AppChildren) => {
  const [user, setUser] = useState<User | undefined>();
  const backend = useBackend();
  const accessToken = getCookie("accessToken");

  if (user === undefined && accessToken !== null) {
    console.log("this is running!")
    backend.postCheckUser(accessToken).then((user) => setUser(user));
  }

  const login = useCallback(
    (username: string, password: string) => {
      return backend
        .postSignIn(username, password)
        .then((response) => {
          if (response) {
            setCookie("accessToken", response.accessToken, 1);
            setCookie("refreshToken", response.refreshToken, 1);
          }

          return response;
        })
        .then((token) => backend.postCheckUser(token.accessToken))
        .then((user) => {
          setUser(user);
          return user;
        });
    },
    [backend]
  );

  const logout = useCallback(() => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    setUser(undefined);
  }, []);

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
