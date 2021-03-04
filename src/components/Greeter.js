import React from "react";

function Greeter({ userinfo, isLogin }) {
  return (
    <div className="greeter">
      {isLogin ? <img src={userinfo.avatar} className="user-img" /> : ""}
      <h2>안녕하세요</h2>
      {isLogin ? (
        <p> {userinfo.username}님! 방문해주셔서 감사합니다 😄 </p>
      ) : (
        <p>로그인 메뉴를 클릭하여 로그인 해주세요</p>
      )}
    </div>
  );
}

export default Greeter;
