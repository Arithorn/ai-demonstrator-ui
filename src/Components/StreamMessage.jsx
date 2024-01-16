import { Container, Segment } from "semantic-ui-react";
import Markdown from "react-markdown";
import { useRecoilValue } from "recoil";
import { msgsState } from "../State/state";

const StreamMessage = (props) => {
  const messages = useRecoilValue(msgsState);
  // messages.map((msg, index) => console.log(`msg-${index}-${msg.content}`));
  const listItems = messages.map((msg, index) => (
    <Markdown>{msg.content}</Markdown>
  ));
  return (
    <Container>{listItems}</Container>
    // <Segment raised color="red" background="green">
    //   {messages.forEach((msg) => {
    //     const { content } = msg;
    //     console.log(content);
    //     if (content) {
    //       <p>{content}</p>;
    //     }
    //   })}
    //   {/* <Markdown>{markdown}</Markdown> */}
    // </Segment>
  );
};
export { StreamMessage };
