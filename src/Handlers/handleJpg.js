import axios from "axios";
import config from "../config";

const handleJpg = async (event, data) => {
  event.preventDefault();
  const { prompt, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.post(
    `${config.url}/api/image`,
    { prompt },
    axiosConfig
  );

  return res.data;
};

const deleteJpg = async (data) => {
  const { fname, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  let res = await axios.delete(`${config.url}/api/jpg/${fname}`, axiosConfig);

  return res.data;
};

export { handleJpg, deleteJpg };
