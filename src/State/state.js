import { atom } from "recoil";
const loginState = atom({
  key: "loginState",
  default: false,
});

const jwtState = atom({
  key: "jwtState",
  default: "",
});

export { loginState, jwtState };
