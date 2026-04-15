import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/products",
  timeout: 5000,
});

API.interceptors.request.use((config) => {
  console.log("API Request:", config.method?.toUpperCase(), config.url, config.data || "");
  return config;
});

API.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;