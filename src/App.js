import React, { useState } from "react";
import UserListRender from "./Example/UserListRender";
import ModifyCounter from "./Example/ModifyCounter";
import UserListRenderFunc from "./Example/UserListRenderFunc";

function App() {
  const [example, setExample] = useState(0);

  const changeExample = () => {
    setExample((prevExample) => (prevExample === 2 ? 0 : prevExample + 1));
  };

  return (
    <div className="App">
      <button onClick={changeExample}>Switch Example</button>
      {example === 1 && <UserListRender />}
      {example === 2 && <ModifyCounter />}
      {example === 0 && <UserListRenderFunc />}
    </div>
  );
}

export default App;
