import React from "react";

function FontSizer({ fontSize, setFontSize }) {
  /* 클릭한 버튼 아이디 값에 따라 main 태그 전체 폰트가 증감*/
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
      <button className="font-sizer-btn" id="minus" onClick={fontSizeHandler}>
        <i className="fas fa-minus" id="minus"></i>
      </button>
    </div>
  );
}

export default FontSizer;
