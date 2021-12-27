import {
  LOGIN_USER,
  GET_ERROR_STATUS_CODE,
  START_LOADING_DATA,
  END_LOADING_DATA,
} from "../types/type";
import axios from "axios";

const token = localStorage.getItem("token");
export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `https://gamp-server-staging.herokuapp.com/v1/auth/login`,
        data
      );
      console.log(request, "req", data);
      if (request.status === 200) {
        localStorage.setItem("token", request.data?.data?.accesstoken);

        dispatch({ type: LOGIN_USER, payload: "stuff" });
        window.location.href = "/";
      }
    } catch (error) {
      //   dispatch({ type: AUTH_LOADING_ENDS });
      if (error.response.status === 500) {
        dispatch({
          type: GET_ERROR_STATUS_CODE,
          payload: "An error occured",
        });
      }
      if (error.response.status === 401) {
        dispatch({
          type: GET_ERROR_STATUS_CODE,
          payload: "Invalid credentials",
        });

        if (error.response.status === 403) {
          dispatch({
            type: GET_ERROR_STATUS_CODE,
            payload: "Forbidden request",
          });
        }
      }
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    dispatch({
      type: START_LOADING_DATA,
    });

    const res = await axios(
      "https://gamp-server-staging.herokuapp.com/v1/plan/spplan/fetch"
    );
    dispatch({
      type: END_LOADING_DATA,
      payload: res.data.data,
    });
    console.log(res, "rests");
  };
};
