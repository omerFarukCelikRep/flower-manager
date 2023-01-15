import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!auth) {
      setIsAdmin(false);
      return;
    }

    setIsAdmin(auth.roles.some((role) => role === "Admin"));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
