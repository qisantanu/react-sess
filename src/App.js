import React, { useState } from "react";
import { Component } from "react";
import UserListRender from "./Example/UserListRender";
import ModifyCounter from "./Example/ModifyCounter";

function App() {
  const [example, setExample] = useState(0);

  const changeExample = () => {
    setExample((prevExample) => (prevExample === 2 ? 0 : prevExample + 1))
  }

  return (
    <div className="App">
      <button onClick={changeExample}>Switch Example</button>
      { example === 0 && <UserListRender/>}
      { example === 1 && <ModifyCounter/>}
    </div>
  );

}

export default App;