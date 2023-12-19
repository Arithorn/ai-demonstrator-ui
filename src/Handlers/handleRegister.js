import axios from "axios";
import config from "../config";
const HandleRegister = async (event, email, password) => {
  event.preventDefault();
  console.log(event);
  let res = await axios.post(`${config.url}/register`, {
    email,
    password,
  });
  console.log(res);
};
export default HandleRegister;
