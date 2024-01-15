import axios from "axios";
import config from "../config";

const HandleTTS = async (event, data) => {
  event.preventDefault();
  const { message, voice, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.post(
    `${config.url}/api/tts`,
    { voice, message },
    axiosConfig
  );

  return res.data;
};

const DeleteTTS = async (data) => {
  const { fname, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  let res = await axios.delete(`${config.url}/api/mp3/${fname}`, axiosConfig);

  return res.data;
};

export default HandleTTS;
export { DeleteTTS };
