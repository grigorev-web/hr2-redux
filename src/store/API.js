import axios from "axios";

const api = (dispatch, state) => {
  const instance = axios.create({
    baseURL: "http://10.105.0.8/hh/api/v2/",
    params: { login: state.login, role: state.role, env: state.env },
  });

  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log("API");
    if (!response.data.login) {
      console.log("нет логина");
      dispatch({ type: "LOGOUT" }); 
      return;
    }
    // stop infinite scroll
    if ( ('scroll' in response.data) && !response.data.scroll) {
      console.log("STOP_SCROLL");
      dispatch({ type: "STOP_SCROLL" }); 
      return response;
    }

    return response;
  });

  return instance;
};

export default api;
