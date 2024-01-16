import Markdown from "react-markdown";
import {
  Comment,
  CommentAvatar,
  CommentAuthor,
  CommentContent,
  CommentGroup,
  Divider,
} from "semantic-ui-react";
import rehypeHighlight from "rehype-highlight";
import aiImg from "../assets/ai.svg";
import userImg from "../assets/user.svg";
import reactImg from "../assets/react.svg";

const OpenaiMessageBox = (props) => {
  const { role, content } = props.msg;
  if (role === "system") {
    return <div></div>;
  }
  let roleText = "";
  switch (role) {
    case "user":
      roleText = "You";
      break;
    case "assistant":
      roleText = "AI Bot";
      break;
    case "system":
      roleText = "System Prompt";
      break;

    default:
      break;
  }
  const imgSrc = role === "assistant" ? aiImg : userImg;
  return (
    <div>
      <CommentGroup>
        <Comment>
          <CommentAvatar src={imgSrc} />
          <CommentContent>
            <CommentAuthor>{roleText}</CommentAuthor>
          </CommentContent>
        </Comment>
      </CommentGroup>
      <br />
      <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
      <Divider />
      <br />
      <br />
    </div>
  );
};
export { OpenaiMessageBox };
