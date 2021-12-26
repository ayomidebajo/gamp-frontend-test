import { LOGIN_USER } from "../types/type";

const iniState = {
  user: "",
  userObject: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = iniState, action) {
  console.log("working");
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userObject: action.payload,
      };
    default:
      return state;
  }
}
