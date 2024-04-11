import { Container, Divider } from "semantic-ui-react";
import Markdown from "react-markdown";
import { homeContent } from "../assets/markdown/homem";
// import { handleLogin } from "../Handlers/handleLogin";
const Home = () => {
  // handleLogin("/");
  return (
    <Container>
      <Divider />
      <Markdown>{homeContent}</Markdown>
    </Container>
  );
};
export default Home;
