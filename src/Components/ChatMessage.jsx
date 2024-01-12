import { Segment } from "semantic-ui-react";
import Markdown from "react-markdown";

const ChatMessage = (props) => {
  const { message } = props;

  if (message.length === 0) {
    return;
  }
  const markdown = `${message}`;
  return (
    <Segment raised color="blue" background="green">
      <Markdown>{markdown}</Markdown>
    </Segment>
  );
};
export { ChatMessage };
