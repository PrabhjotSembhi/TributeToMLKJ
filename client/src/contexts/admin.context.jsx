import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext({
    admin: null,
    setAdmin: () => null
});

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const value = { admin, setAdmin };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
