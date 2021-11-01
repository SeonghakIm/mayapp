import React, { useState } from "react";
import Screen from "./Screen";

function App() {
  const [user] = useState({
    name: "Seonghak",
  });
  return (
    <>
      <Screen user={user} />
    </>
  );
}

export default App;
