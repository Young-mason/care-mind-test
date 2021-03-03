import React from "react";

function Greeter({ user }) {
  return (
    <div className="greeter">
      <h1>Hello "{user}"</h1>
      <p>안녕하세요, 방문해주셔서 감사합니다 😄</p>
    </div>
  );
}

export default Greeter;
