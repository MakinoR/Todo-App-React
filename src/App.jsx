import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };
  return (
    <>
      <h1 style={{ color: "black" }}>こんちは!!</h1>
      <ColorfulMessage color="blue">オゲンキデスカ？</ColorfulMessage>
      <ColorfulMessage color="red">げんきです！！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
