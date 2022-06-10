import React, { createContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers/auth.reducer";
import { axiosGet } from "../axiosInstance";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await axiosGet("/auth/validate");
        await console.log(res);
        await dispatch({
          type: "LOGGED_IN",
          payload: res,
        });
      } catch (error) {
        //console.log(error);
      }
    };
    validateSession();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
