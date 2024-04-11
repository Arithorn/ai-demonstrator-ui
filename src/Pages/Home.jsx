import { Container, Divider } from "semantic-ui-react";
import Markdown from "react-markdown";
import { homeContent } from "../assets/markdown/homem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginState, jwtState } from "../State/state";
const Home = () => {
  const setLoginState = useSetRecoilState(loginState);
  const setJwt = useSetRecoilState(jwtState);
  const token = localStorage.getItem("token");
  if (token !== null) {
    setLoginState(true);
    setJwt(token);
  }
  return (
    <Container>
      <Divider />
      <Markdown>{homeContent}</Markdown>
    </Container>
  );
};
export default Home;
