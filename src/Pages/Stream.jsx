import { Button, Container } from "semantic-ui-react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { StreamForm } from "../Components/StreamForm";
import { StreamMessage } from "../Components/StreamMessage";
import { handleStream } from "../Handlers/handleStream";
import { msgsState } from "../State/state";
import config from "../config";

const Stream = () => {
  const resetChat = () => {
    setMessages([
      {
        role: "system",
        content: config.systemPrompt,
      },
    ]);
  };
  const updateMessages = (msg) => {
    setMessages((messages) => [...messages, msg]);
  };
  const updateStream = (chunk, isNewMessage) => {
    if (chunk != null) {
      if (isNewMessage === true) {
        updateMessages(chunk);
      } else {
        setMessages((messages) => messages.slice(0, messages.length - 1));
        setMessages((messages) => [...messages, chunk]);
      }
    }
  };

  const [message, setMessage] = useState("");
  const messages = useRecoilValue(msgsState);
  const setMessages = useSetRecoilState(msgsState);
  return (
    <Container>
      <Button onClick={resetChat}>Reset</Button>
      <Container>
        <StreamMessage messages={messages} />
        <p>{message}</p>
        <StreamForm
          StreamHandler={handleStream}
          updateStream={updateStream}
          messages={messages}
        />
      </Container>
    </Container>
  );
};

export default Stream;
