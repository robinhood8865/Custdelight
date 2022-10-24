import axios from "axios";
import TokenService from "./TokenService";

const Axios = axios.create();

Axios.interceptors.request.use(
  async (config) => {
    const accessToken = TokenService.getAccessToken();
    const headers: { [key: string]: string } = { Accept: "application/json" };

    if (accessToken) {
      headers.Authorization = accessToken;
    }
    config.headers = { ...config.headers, ...headers };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error.response);
  }
);

const SERVER_URL = process.env.REACT_APP_BACKEND_API;
const API_VERSION = "api";
const END_POINTS = {
  UPDATE_WIDGET: `${SERVER_URL}/${API_VERSION}/widget`,
  UPLOAD: `${SERVER_URL}/${API_VERSION}/upload/icon`,
  // USERS: `${SERVER_URL}/${API_VERSION}/users`,
};

class ApiService {
  private Authorization: null | string = null;
  static updateWidget = async (data: any) => {
    return Axios.request({
      url: `${END_POINTS.UPDATE_WIDGET}`,
      method: "post",
      data,
    });
  };
  static uploadIcon = async (data: any) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return Axios.post(END_POINTS.UPLOAD, data, config);
  };
}

export default ApiService;
