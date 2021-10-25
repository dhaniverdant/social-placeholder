import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

const reducers = combineReducers({
  allUsers: userReducer,
});

export default reducers;
