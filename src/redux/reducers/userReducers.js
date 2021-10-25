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
