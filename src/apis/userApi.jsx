import axios from "axios";

const url = "http://ec2-43-201-127-147.ap-northeast-2.compute.amazonaws.com:8080";

export const UserLogin = (payload) => {
  return axios.post(`${url}/login`, payload);
};
