import React from "react";

import "./title.styles.scss";

const Title = ({ text, textIsBlack }) => {
  return (
    <h2 className="display-3 text-center text-capitalize title-container">
      <strong className={`${textIsBlack ? "title-black" : "title-white"}`}>
        {text}
      </strong>
    </h2>
  );
};

export default Title;
