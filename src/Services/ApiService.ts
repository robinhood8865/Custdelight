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
    // Promise.reject(error);
    Promise.reject(error?.response?.data?.errors?.[0]);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    Promise.reject(error?.response?.data?.errors?.[0]);
  }
);

const SERVER_URL = process.env.REACT_APP_BACKEND_API;
const API_VERSION = "api";
const END_POINTS = {
  READ_WIDGET: `${SERVER_URL}/${API_VERSION}/widget`,
  UPDATE_WIDGET: `${SERVER_URL}/${API_VERSION}/widget`,
  UPLOAD: `${SERVER_URL}/${API_VERSION}/upload/icon`,
  UPDATE_AIRTABLE_APIKEY: `${SERVER_URL}/${API_VERSION}/updateapikey`,
  CREATE_AIRTABLE_BASE: `${SERVER_URL}/${API_VERSION}/airtableApi/createbase`,
  CONNECT_AIRTABLE_BASE: `${SERVER_URL}/${API_VERSION}/airtableApi/connectbase`,

  // USERS: `${SERVER_URL}/${API_VERSION}/users`,
};

class ApiService {
  private Authorization: null | string = null;
  static updateWidget = async (data: any) => {
    return await Axios.request({
      url: `${END_POINTS.UPDATE_WIDGET}`,
      method: "post",
      data,
    });
  };
  static createBase = async (data: any) => {
    return await Axios.request({
      url: `${END_POINTS.CREATE_AIRTABLE_BASE}`,
      method: "post",
      data,
    });
  };
  static connectBase = async (data: any) => {
    return await Axios.request({
      url: `${END_POINTS.CONNECT_AIRTABLE_BASE}`,
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
    return await Axios.post(END_POINTS.UPLOAD, data, config);
  };
  static readWidget = async (data: any) => {
    return await Axios.request({
      url: `${END_POINTS.READ_WIDGET}`,
      method: "get",
      data,
    });
  };
}

export default ApiService;
