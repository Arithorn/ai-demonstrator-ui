import axios from "axios";
import config from "../config";
const HandleRegister = async ({ email, password }) => {
  let res = await axios.post(`${config.url}/register`, {
    email,
    password,
  });

  return res.data;
};
export default HandleRegister;
