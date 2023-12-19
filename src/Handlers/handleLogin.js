import axios from "axios";

import config from "../config";
const HandleLogin = async (event, email, password) => {
  event.preventDefault();
  let res = await axios.post(`${config.url}/login`, {
    email,
    password,
  });
  const { token } = res.data;
  //   console.log(token);
  //   const axiosConfig = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${token}`,
  //     },
  //   };
  //   let res2 = await axios.post(
  //     "http://mc.manbatcave.com:3001/api/tts",
  //     { message: "Testing 1234" },
  //     axiosConfig
  //   );
  return token;
};
export default HandleLogin;
