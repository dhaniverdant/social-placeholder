import userApi from "../../api/userApi";
import { ActionTypes } from "../constants/action-types";

export const fetchUsers = () => async (dispatch) => {
  const response = await userApi.get("/users");
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: response.data,
  });
};
