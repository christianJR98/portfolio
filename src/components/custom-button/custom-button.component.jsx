import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ otherClasses, text }) => {
  return (
    <button className={`btn btn-info btn-lg px-4 ${otherClasses}`}>
      {text}
    </button>
  );
};

export default CustomButton;
