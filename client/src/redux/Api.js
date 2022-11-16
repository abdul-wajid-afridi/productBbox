import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:3000/",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});
