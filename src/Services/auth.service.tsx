import axios from "axios";

const API_URL = "http://localhost:3001/api/auth/";

const register = (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
