import { createContext } from "react";

const AuthContext = createContext({
  isLoaded: false,
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  logOut: () => {},
});

export default AuthContext;