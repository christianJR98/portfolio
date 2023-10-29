import React from "react";

import "./triangle.styles.scss";

const Triangle = (props) => {
  const { color, backgroundColor, height, isReverse } = props;
  return (
    <div
      className="triangle"
      style={{
        backgroundColor: color,
        borderColor: color,
      }}
    >
      <div
        className={
          isReverse ? "triangle-container-reverse" : "triangle-container"
        }
        style={{
          height: height,
          backgroundColor: backgroundColor,
        }}
      ></div>
    </div>
  );
};

export default Triangle;
