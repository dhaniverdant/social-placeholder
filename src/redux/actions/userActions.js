import userApi from "../../api/userApi";
import { ActionTypes } from "../constants/action-types";

export const fetchUsers = () => async (dispatch) => {
  const response = await userApi.get("/users");
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await userApi.get(`/users/${id}`);
  dispatch({
    type: ActionTypes.SELECTED_USER,
    payload: response.data,
  });
};
