import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({});

  /* 로그인 요청 */
  const loginRequestHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/signin", loginData).then(console.log);
    // !! 토큰을 받아서 로컬 스토리지에 저장
  };

  return (
    <form className="modal-form">
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
      <input
        type="submit"
        value="Login"
        className="submit-btn"
        onClick={loginRequestHandler}
      />
    </form>
  );
}

export default Login;
