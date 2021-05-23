/*eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //第２引数にからの配列を入れると毎回呼び出されるのを防げる
  //第２引数を入れると指定したものが変化したときのみ呼び出される=>処理の関心を分離できたり、最初のみだけ関与できたりする！
  useEffect(() => {
    //論理演算子で無限レンダリングを防ぐ（呼び出さないようにする）
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "black" }}>こんちは!!</h1>
      <ColorfulMessage color="blue">オゲンキデスカ？</ColorfulMessage>
      <ColorfulMessage color="red">げんきです！！</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <br />
      <button onClick={onClickSwichShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(・ω・)</p>}
    </>
  );
};

export default App;
