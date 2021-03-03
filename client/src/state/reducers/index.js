import { combineReducers } from "redux";
import { accessTokenReducer, isLoginReducer } from "./login";
import { userInfoReducer } from "./userinfo";

const reducers = combineReducers({
  accessTokenReducer,
  isLoginReducer,
  userInfoReducer,
});

export default reducers;
