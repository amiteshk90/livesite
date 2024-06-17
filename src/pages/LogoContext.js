// src/LogoContext.js
import React, { createContext, useState } from 'react';
import sidebar_logo from "../assets/white_logo.png";
import sidebar_logo1 from "../assets/Logo.png";

export const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(sidebar_logo);

  return (
    <LogoContext.Provider value={{ logo, setLogo }}>
      {children}
    </LogoContext.Provider>
  );
};
