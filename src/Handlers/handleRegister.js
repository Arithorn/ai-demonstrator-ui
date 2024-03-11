import axios from "axios";
import config from "../config";
const HandleRegister = async (event, email, password) => {
  console.log(config.url);
  event.preventDefault();
  let res = await axios.post(`${config.url}/register`, {
    email,
    password,
  });
  console.log(res.data);
  return res.data;
};
export default HandleRegister;
