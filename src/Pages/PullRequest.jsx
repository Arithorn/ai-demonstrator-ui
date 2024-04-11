import { Container } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { PullRequestForm } from "../Components/PullRequestForm";
import { StreamMessage } from "../Components/StreamMessage";
import { handlePullRequestReview } from "../Handlers/handlePullRequestReview";
import { msgsState } from "../State/state";
import { handleLogin } from "../Handlers/handleLogin";

const PullRequest = () => {
  handleLogin("/pullrequest");
  const messages = useRecoilValue(msgsState);
  return (
    <Container>
      <Container>
        <StreamMessage messages={messages} />
        <PullRequestForm
          StreamHandler={handlePullRequestReview}
          messages={messages}
        />
      </Container>
    </Container>
  );
};

export default PullRequest;
