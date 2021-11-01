import React from "react";

const Header = ({ user }) => {
  return (
    <header>
      <a href="#">Home</a> Hello, {user.name}!
    </header>
  );
};
export default Header;
