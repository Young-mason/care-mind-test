import { actionType } from "../actions";

/* 초기 상태 선언 */

const initialState = {
  user: {
    userinfo: null,
    isLogin: null,
  },
};

/* 리듀서 */

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
