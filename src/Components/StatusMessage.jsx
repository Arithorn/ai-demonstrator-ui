import { Message } from "semantic-ui-react";
const StatusMessage = (props) => {
  const { msg } = props;
  if (!msg) return;
  if (msg === "") {
    return <div></div>;
  } else {
    return <Message>{msg}</Message>;
  }
};
export default StatusMessage;
