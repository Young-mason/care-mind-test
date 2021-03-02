import React, { useState } from "react";
import FontSizer from "../componenets/FontSizer";

function Main({ showNav }) {
  const [fontSize, setFontSize] = useState(16);

  return (
    <main
      className={showNav ? "show-nav" : ""}
      style={{
        fontSize: `${fontSize.toString()}px`,
      }}
    >
      <FontSizer fontSize={fontSize} setFontSize={setFontSize}></FontSizer>
      <h1>For TEST</h1>
      <p>
        This example demonstrates how a navigation menu on a mobile/smart phone
        could look like. Click on the hamburger menu (three bars) in the top
        right corner, to toggle the menu.
      </p>
    </main>
  );
}

export default Main;
