import React, { useState, createContext, useMemo,useContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [login, setLogin] = useState(()=>{
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  });
  const action = useMemo(
    () => ({
      doLogin() {
        setLogin((prev) => !prev);
      },
      doLogout() {
        setLogin((prev) => !prev);
      },
    }),
    []
  );
  const value = useMemo(() => [login, action], [login, action]);
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

function useLogin(){
  const value = useContext(LoginContext);
  return value;
}

export {useLogin,LoginProvider,LoginContext}