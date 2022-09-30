import axios from "axios";

const API_URL = "http://localhost:3001/api/auth";

export const register = (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  return axios.post(API_URL + "/signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "/signin", {
      email,
      password,
    })
    .then((response) => {
      console.log("response", response);
      if (response.data.accessToken) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
      }
      console.log("local", localStorage.getItem("user"));
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

const authService = { getCurrentUser, login, logout, register };

export default authService;
