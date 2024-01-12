import axios from "axios";

import config from "../config";
const HandleLogin = async (event, email, password) => {
  event.preventDefault();
  let res = await axios.post(`${config.url}/login`, {
    email,
    password,
  });
  const data = res.data;
  return data;
};
export default HandleLogin;
