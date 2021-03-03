import { actionType } from "../actions";

/* 초기 상태 선언 */

const isLogin = {
  isLogin: false,
};

/* 리듀서 */

export function accessTokenReducer(state = {}, action) {
  switch (action.type) {
    case actionType.SET_ACCESSTOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export function isLoginReducer(state = isLogin, action) {
  switch (action.type) {
    case actionType.SET_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
}
