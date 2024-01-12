import axios from "axios";
import config from "../config";

const HandleChat = async (event, data) => {
  event.preventDefault();
  const { model, message, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let systemMessage = {
    role: "system",
    content: "Please output your answer using markdown.",
  };
  let messages = [systemMessage, { role: "user", content: message }];
  let res = await axios.post(
    `${config.url}/api/chat`,
    { model, messages },
    axiosConfig
  );
  const resmessage = res.data.result.content;
  return resmessage;
};
export default HandleChat;
