import { Container, Segment } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";
import { msgsState } from "../State/state";
import { OpenaiMessageBox } from "./openaiMessageBox";

const StreamMessage = (props) => {
  const scrollToBottom = useScrollToBottom();
  const messages = useRecoilValue(msgsState);
  const listItems = messages.map((msg, index) => (
    <OpenaiMessageBox msg={msg} key={index} />
  ));
  return (
    <Container>
      <ScrollToBottom>{listItems}</ScrollToBottom>
    </Container>
  );
};
export { StreamMessage };
