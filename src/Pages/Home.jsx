import { Container, Divider } from "semantic-ui-react";
import Markdown from "react-markdown";
import { homeContent } from "../assets/markdown/homem";
const Home = () => {
  return (
    <Container>
      <Divider />
      <Markdown>{homeContent}</Markdown>
    </Container>
  );
};
export default Home;
