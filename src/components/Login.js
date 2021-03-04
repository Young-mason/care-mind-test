import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({});

  /* 로그인 요청 ( jwt 토큰 받아온 후 새로고침 ) */
  const loginRequestHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/getToken", loginData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
      })
      .then(() => window.location.reload());

    // 이후 로그인은 actions.js 에서 진행됩니다
  };

  return (
    <form className="modal-form" onSubmit={loginRequestHandler}>
      <div>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          placeholder="Enter ID"
          className="form-input"
          onChange={(e) =>
            setLoginData({ ...loginData, userId: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter Password"
          className="form-input"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </div>
      <input type="submit" value="Login" className="submit-btn" />
    </form>
  );
}

export default Login;
