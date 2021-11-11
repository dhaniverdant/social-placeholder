import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: []
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_USERS:
      return { ...state, users: payload };
    default:
      return state;
  };
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_USER:
      return {};
    default:
      return state;
  }
}
