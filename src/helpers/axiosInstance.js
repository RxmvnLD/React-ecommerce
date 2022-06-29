/* eslint-disable no-throw-literal */
import axios from "axios";

export const getToken = () => {
  const storedToken = window.localStorage.getItem("token");
  if (typeof storedToken === "string") {
    return storedToken;
  }
};

const axiosInstance = axios.create({
  baseURL: "https://backendnodejstzuzulcode.uw.r.appspot.com/api",
  withCredentials: true,
});

//Post
export const axiosPost = async (url, data) => {
  try {
    const res = await axiosInstance.post(url, data);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const axiosGet = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const axiosPut = async (url) => {
  try {
    const res = await axiosInstance.put(url);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};
