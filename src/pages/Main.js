import React, { useState, useEffect } from "react";
import GoogleChart from "../components/GoogleChart";
import FontSizer from "../components/FontSizer";
import Greeter from "../components/Greeter";
import { getUserInfo } from "../state/actions";
import { useDispatch, useSelector } from "react-redux";

function Main({ showNav }) {
  const [fontSize, setFontSize] = useState(16);
  const dispatch = useDispatch();
  const { userinfo, isLogin } = useSelector((state) => state.loginReducer.user);

  // Local storage에 토큰이 있으면 유저정보를 요청합니다.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserInfo(token));
    }
  }, []);

  return (
    <main
      className={showNav ? "show-nav" : ""}
      style={{
        fontSize: `${fontSize.toString()}px`,
      }}
    >
      <FontSizer fontSize={fontSize} setFontSize={setFontSize} />
      <Greeter userinfo={userinfo} isLogin={isLogin} />
      <GoogleChart />
    </main>
  );
}

export default Main;
