import { actionType } from "../actions";

/* 초기 상태 선언 */
const userInfo = {
  userinfo: {
    username: null,
    avatar: null,
  },
};

/* 리듀서 */
export const userInfoReducer = (state = userInfo, action) => {
  switch (action.type) {
    case actionType.SET_USERINFO:
      return {
        ...state,
        userinfo: action.userinfo,
      };
    default:
      return state;
  }
};
