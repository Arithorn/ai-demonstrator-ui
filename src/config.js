const config = {
  url: import.meta.env.VITE_BE_URL,
};

const gptOptions = [
  { key: "GPT4-Turbo", text: "GPT4 Turbo", value: "gpt-4-turbo-preview" },
  {
    key: "Claude3Opus",
    text: "Claude 3 Opus",
    value: "claude-3-opus-20240229",
  },
  { key: "GPT3.5-Turbo", text: "GPT3.5 Turbo", value: "gpt-3.5-turbo" },
  { key: "GPT4", text: "GPT 4", value: "gpt-4" },
  {
    key: "Claude3Sonnet",
    text: "Claude 3 Sonnet",
    value: "claude-3-sonnet-20240229",
  },
  {
    key: "Claude3Haiku",
    text: "Claude 3 Haiku",
    value: "claude-3-haiku-20240229",
  },
];

const voiceOptions = [
  { key: "alloy", text: "Alloy", value: "alloy" },
  { key: "echo", text: "Echo", value: "echo" },
  { key: "fable", text: "Fable", value: "fable" },
  { key: "onyx", text: "Onyx", value: "onyx" },
  { key: "nova", text: "Nova", value: "nova" },
  { key: "shimmer", text: "Shimmer", value: "shimmer" },
];

export default config;
export { gptOptions, voiceOptions };
