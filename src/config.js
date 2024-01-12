const config = {
  url: "http://mc.manbatcave.com:3001",
};

const gptOptions = [
  { key: "GPT4-Turbo", text: "GPT4 Turbo", value: "gpt-4-1106-preview" },
  { key: "GPT3.5-Turbo", text: "GPT3.5 Turbo", value: "gpt-3.5-turbo-1106" },
  { key: "GPT3.5", text: "GPT 3.5", value: "gpt-3.5" },
  { key: "GPT4", text: "GPT 4", value: "gpt-4" },
];

export default config;
export { gptOptions };
