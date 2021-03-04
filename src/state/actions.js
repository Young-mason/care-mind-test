import axios from "axios";

/* Action Type & Actions */
export const actionType = {
  SET_USER: "SET_USER",
  SET_LOGOUT: "SET_LOGOUT",
};

export const setUser = (user) => ({
  type: actionType.SET_USER,
  user,
});

export const setLogout = () => ({
  type: actionType.SET_LOGOUT,
});

/* Action Creator */

// 유저정보 + 로그인 상태 변경
export const getUserInfo = (token) => (dispatch) => {
  axios
    .get("http://localhost:5000/login", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => {
      const user = res.data.user;
      dispatch(setUser({ isLogin: true, userinfo: user }));
    });
};

// 로그아웃
export const logout = (token) => (dispatch) => {
  dispatch(setLogout());
  axios
    .post("http://localhost:5000/logout", "", {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(() => {
      localStorage.removeItem("token");
      window.location.reload();
    });
};
