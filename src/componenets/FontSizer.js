import React from "react";

function FontSizer({ fontSize, setFontSize }) {
  const fontSizeHandler = (e) => {
    if (e.target.id === "plus") {
      setFontSize((fontSize += 1));
    }
    if (e.target.id === "minus") {
      setFontSize((fontSize -= 1));
    }
  };

  return (
    <div className="font-sizer-container">
      <button className="font-sizer-btn" id="plus" onClick={fontSizeHandler}>
        <i className="fas fa-plus" id="plus"></i>
      </button>
      <button
        className="font-sizer-btn minus"
        id="minus"
        onClick={fontSizeHandler}
      >
        <i className="fas fa-minus" id="minus"></i>
      </button>
    </div>
  );
}

export default FontSizer;
