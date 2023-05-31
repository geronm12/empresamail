import { createContext, useState } from "react";

const initialValue = {
  isLogged: false,
  token: "",
  employeeId: "",
  foto: "",
};

export const ContextProvider = createContext();

// eslint-disable-next-line react/prop-types
export const DataContext = ({ children }) => {
  const [user, setUser] = useState(initialValue);
  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
};
