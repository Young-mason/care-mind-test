import React, { useState, useEffect } from "react";
import GoogleChart from "../componenets/GoogleChart";
import FontSizer from "../componenets/FontSizer";
import Greeter from "../componenets/Greeter";

function Main({ showNav }) {
  const [fontSize, setFontSize] = useState(16);
  console.log(fontSize);

  return (
    <main
      className={showNav ? "show-nav" : ""}
      style={{
        fontSize: `${fontSize.toString()}px`,
      }}
    >
      <FontSizer fontSize={fontSize} setFontSize={setFontSize}></FontSizer>

      <Greeter user="Master"></Greeter>
      <p>1-1, 1-2, 2-1 문항을 이 페이지에 구현하였습니다</p>
      <GoogleChart></GoogleChart>
    </main>
  );
}

export default Main;
