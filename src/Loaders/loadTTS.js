import axios from "axios";
import config from "../config";
const loadTTS = async (data) => {
  const { token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.get(`${config.url}/api/mp3`, axiosConfig);
  return res.data.list;
};
export default loadTTS;
