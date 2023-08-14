import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.170:5000/api",
  headers: {
    'Accept' : 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default api;