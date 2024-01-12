import { Container } from "semantic-ui-react";
import { useState } from "react";
import { ChatMessage } from "../Components/ChatMessage";
import ChatForm from "../Components/ChatForm";
import HandleChat from "../Handlers/handleChat";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const updateFunction = (message) => {
    setMessage(message);
  };
  return (
    <Container>
      <ChatMessage message={message} />
      <ChatForm ChatHandler={HandleChat} updateFunction={updateFunction} />
    </Container>
  );
};

export default Chat;
