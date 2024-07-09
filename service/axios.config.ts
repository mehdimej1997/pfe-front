import { AuthResponseDto } from "@/dto";
import axios from "axios";
import cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      cookies.remove("user-session");
      location.href = "/";
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    const cookie = cookies.get("user-session");
    if (cookie) {
      const { accessToken } = JSON.parse(cookie) as AuthResponseDto;
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
