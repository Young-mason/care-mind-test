export const actionType = {
    SET_ACCESSTOKEN = 'set_accesstoken',
    SET_LOGIN = 'set_login',
    SET_USERINFO = 'set_userinfo'
}


/* Action Creator */
export const setAccessToken = (token) => ({
  type: actionType.SET_ACCESSTOKEN,
  token
});

export const setLogin = (isLogin) => ({
  type: actionType.SET_LOGIN,
  isLogin
});

export const setUserInfo = (userinfo) => ({
  type: actionType.SET_USERINFO,
  userinfo
})