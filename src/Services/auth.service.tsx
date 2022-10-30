import axios from "axios";
const SERVER_URL = process.env.REACT_APP_BACKEND_API;
const API_URL = SERVER_URL + "/api/auth";

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
