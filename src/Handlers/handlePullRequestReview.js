import axios from "axios";
import config from "../config";

const handlePullRequestReview = async (event, data) => {
  event.preventDefault();
  const { model, pull_number, repo, token } = data;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  let res = await axios.post(
    `${config.url}/api/pullrequest`,
    { model, repo, pull_number, owner: "discovery-ltd" },
    axiosConfig
  );
  const resmessage = [{ role: "assistant", content: res.data.result.content }];
  return resmessage;
};
export { handlePullRequestReview };
