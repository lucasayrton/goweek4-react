import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.34.238:3000"
});

export default api;
