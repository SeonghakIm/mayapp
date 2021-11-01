import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Seonghak",
    loggedIn: false,
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  const logUserOut = () => setUser({ ...user, loggedIn: false });
  return (
    <UserContext.Provider value={{ user, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
