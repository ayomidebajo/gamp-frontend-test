import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers = {
      accesstoken: token,
    };
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["X-API-KEY"];
  }
};

export default setAuthToken;
