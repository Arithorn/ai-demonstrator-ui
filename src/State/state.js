import { atom } from "recoil";
const loginState = atom({
  key: "loginState",
  default: false,
});

const jwtState = atom({
  key: "jwtState",
  default: "",
});

// const msgsState = atom({
//   key: "msgsState",
//   default: [
//     {
//       role: "system",
//       content:
//         "Output all your answers in markdown.If you don't use markdown you will be penalized. Specify the programming language next to the backticks when creating code blocks.",
//     },
//   ],
// });

const msgsState = atom({
  key: "msgsState",
  default: [
    {
      role: "system",
      content:
        "Output all your answers in markdown.If you don't use markdown you will be penalized. Specify the programming language next to the backticks when creating code blocks.",
    },
  ],
});

export { loginState, jwtState, msgsState };
