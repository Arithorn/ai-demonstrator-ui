import { atom } from "recoil";
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
    { role: "system", content: "Please output your answer using markdown." },
  ],
});

export { loginState, jwtState, msgsState };
