// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ContextProvider } from "../../context/AppContext";
import { Navigate } from "react-router-dom";
import { CustomNavbar } from "../Navbar/CustomNavbar";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(ContextProvider);

  if (!user?.isLogged) return <Navigate to="/login" />;

  return (
    <>
      <CustomNavbar></CustomNavbar>
      {children}
    </>
  );
};
