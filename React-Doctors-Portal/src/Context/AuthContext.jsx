import React, { createContext } from "react";
import useFirebase from "../Hooks/Firebase/useFirebase";
export const AuthProvicder = createContext();
const AuthContext = ({ children }) => {
  return (
    <AuthProvicder.Provider value={useFirebase()}>
      {children}
    </AuthProvicder.Provider>
  );
};

export default AuthContext;
