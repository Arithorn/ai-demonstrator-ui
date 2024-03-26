import { atom } from "recoil";
import config from "../config";
const loginState = atom({
  key: "loginState",
  default: false,
});

const jwtState = atom({
  key: "jwtState",
  default: "",
});

const msgsState = atom({
  key: "msgsState",
  default: [
    {
      role: "system",
      content: config.systemPrompt,
    },
  ],
});

export { loginState, jwtState, msgsState };
