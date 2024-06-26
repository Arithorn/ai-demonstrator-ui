import axios from "axios";
import config from "../config";

const handleStream = async (event, data) => {
  const { updateStream, model, promptMessage, updateMessages, token } = data;

  let messages = data.messages;

  updateMessages((messages) => [...messages, promptMessage]);

  const prompt = [...messages, promptMessage];

  let answer = "";
  const response = await fetch(`${config.url}/api/stream`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ model, messages: prompt }),
  });
  if (!response.ok || !response.body) {
    throw response.statusText;
  }
  // Here we start prepping for the streaming response
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const loopRunner = true;
  updateStream({ role: "assistant", content: "" }, true);
  while (loopRunner) {
    // Here we start reading the stream, until its done.
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    const decodedChunk = decoder.decode(value, { stream: true });
    answer = answer + decodedChunk;
    // console.log(`feedback from openai ${decodedChunk}`);
    updateStream({ role: "assistant", content: answer }, false); // update state with new chunk
  }
  return;
};

export { handleStream };
