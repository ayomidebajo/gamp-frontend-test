import {
  LOGIN_USER,
  START_LOADING_DATA,
  END_LOADING_DATA,
} from "../types/type";

const iniState = {
  loading: false,
  userObject: [],
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = iniState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userObject: action.payload,
      };
    case START_LOADING_DATA:
      return {
        ...state,
        loading: false,
      };
    case END_LOADING_DATA:
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    default:
      return state;
  }
}
