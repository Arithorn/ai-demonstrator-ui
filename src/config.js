const config = {
  url: "https://demo.ts-disc-demo.discovery.cloud",
};

const gptOptions = [
  { key: "GPT4-Turbo", text: "GPT4 Turbo", value: "gpt-4-1106-preview" },
  { key: "GPT3.5-Turbo", text: "GPT3.5 Turbo", value: "gpt-3.5-turbo-1106" },
  { key: "GPT4", text: "GPT 4", value: "gpt-4" },
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
