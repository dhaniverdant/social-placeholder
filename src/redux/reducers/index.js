import { combineReducers } from "redux";
import { selectedUserReducer, userReducer } from "./userReducers";

const reducers = combineReducers({
  allUsers: userReducer,
  user: selectedUserReducer,
});

export default reducers;
