import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId,setUserId] = useState("");
  const updateToken = (newValue) => {
    setToken(newValue);
  };
  const updateUserId = (newValue) => {
    setUserId(newValue);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken,userId, updateUserId }}>
      {children}
    </AuthContext.Provider>
  );
};