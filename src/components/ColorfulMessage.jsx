import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLadyStyle = {
    color,
    fontSize: "18px",
    fontWeight: "bolder"
  };
  return <p style={contentLadyStyle}>{children}</p>;
};

export default ColorfulMessage;
