import { createContext, useContext } from "react";
import User from "../../models/User";

interface AuthContext {
  user: User | undefined;
  login:(username: string, password: string) => Promise<User | undefined>
  logout: () => void
}

const defaultAuthContext = {
  user: undefined,
  login: async () => undefined,
  logout: () => {}
}

export const AuthContext = createContext<AuthContext>(defaultAuthContext);

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
