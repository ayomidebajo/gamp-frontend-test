import {
  LOGIN_USER,
  GET_ERROR_STATUS_CODE,
  START_LOADING_DATA,
  END_LOADING_DATA,
  CHECK_TOKEN_VALIDITY,
} from "../types/type";
import axios from "axios";
import decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const request = await axios.post("/v1/auth/login", data);
      if (request.status === 200) {
        localStorage.setItem("token", request.data?.data?.accesstoken);
        dispatch({ type: LOGIN_USER, payload: "stuff" });
        window.location.href = "/";
      }
    } catch (error) {
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

    const res = await axios("/v1/plan/spplan/fetch");
    dispatch({
      type: END_LOADING_DATA,
      payload: res.data.data,
    });
  };
};

export const checkTokenValidity = (token) => {
  return async (dispatch) => {
    if (token) {
      dispatch({
        type: CHECK_TOKEN_VALIDITY,
      });

      const { exp } = decode(token);

      if (exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
      setAuthToken(token);
    }
    return;
  };
};
