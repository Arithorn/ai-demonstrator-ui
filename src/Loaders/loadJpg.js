import axios from "axios";
import config from "../config";
const loadJpg = async (data) => {
  const { token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  let res = await axios.get(`${config.url}/api/jpg`, axiosConfig);
  return res.data.list;
};
export { loadJpg };
