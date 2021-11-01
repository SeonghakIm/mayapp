import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const { name } = useContext(UserContext);
  console.log(name);
  return (
    <header>
      <a href="#">Home</a> Hello {name}!
    </header>
  );
};
export default Header;
