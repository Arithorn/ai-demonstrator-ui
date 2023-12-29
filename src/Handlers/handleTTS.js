import axios from "axios";
import config from "../config";

const HandleTTS = async (event, data) => {
  event.preventDefault();
  const { message, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.post(`${config.url}/api/tts`, { message }, axiosConfig);
  console.log(res);
  return res;
};
export default HandleTTS;
