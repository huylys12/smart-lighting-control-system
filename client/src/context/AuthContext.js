import React, { createContext, useState } from 'react';
import * as api from "../api/api";
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId,setUserId] = useState("");
  const [refresh,setRefresh] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(async() => {
      const res = await api.post({url:'api/accounts/refreshToken'})
      if(res){
        console.log("Refreshed token");
        setToken(res.token);
      }
    },14*60*1000);

    // return clearInterval(intervalId);
  },[]);
  
  const updateToken = (newValue) => {
    setToken(newValue);
  };
  const updateUserId = (newValue) => {
    setUserId(newValue);
  };
  const reRender = () => {
    setRefresh((previousState) => !previousState);
  }
  return (
    <AuthContext.Provider value={{ token, updateToken,userId, updateUserId, refresh, reRender }}>
      {children}
    </AuthContext.Provider>
  );
};