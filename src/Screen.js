import React from "react";
import { useFns, UserContext } from "./context";
import Header from "./Header";

const Screen = () => {
  const { logUserIn, logUserOut } = useFns(UserContext);
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
      <button onClick={logUserOut}>Log user out</button>
    </div>
  );
};
export default Screen;
