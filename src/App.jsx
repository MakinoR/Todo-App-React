import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "black" }}>こんちは!!</h1>
      <ColorfulMessage color="blue">オゲンキデスカ？</ColorfulMessage>
      <ColorfulMessage color="red">げんきです！！</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
    </>
  );
};

export default App;
