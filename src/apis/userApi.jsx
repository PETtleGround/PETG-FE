import axios from "axios";

const url = "localhost:8080";

export const UserLogin = (payload) => {
  return axios.post(`${url}/login`, payload);
};
