import axios from "axios";

const url = "http://ec2-43-201-127-147.ap-northeast-2.compute.amazonaws.com";
export const UserLogin = (loginInfo) => {
  return axios.post(`${url}/login`, loginInfo);
};
