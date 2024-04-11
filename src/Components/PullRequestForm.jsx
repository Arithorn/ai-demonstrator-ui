import React, { useState, useCallback } from "react"; // Removed useMemo since it's not explicitly used in given adjustments
import { Navigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Button,
  Form,
  FormGroup,
  Dimmer,
  Loader,
  Grid,
  Segment,
  Dropdown,
  Input,
  Label,
  FormField,
  LabelDetail,
} from "semantic-ui-react"; // Changed FormButton to Button for consistency
import { msgsState } from "../State/state";
import { gptOptions } from "../config";
import { handleLogin } from "../Handlers/handleLogin";

const PullRequestForm = ({ StreamHandler, updateStream, updateMessages }) => {
  const [repo, setRepoName] = useState("");
  const [pull_number, setPrNumber] = useState("");
  const [model, setModel] = useState(gptOptions[0].value);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state to manage loading state
  const setMessagesState = useSetRecoilState(msgsState);
  const { isLoggedIn, token } = handleLogin("/pullrequest");
  if (!isLoggedIn) {
    return <Navigate replace to="/login" />;
  }

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsLoading(true); // Set loading state to true upon form submission
      try {
        setMessagesState([]); // Reset messages state upon form submission
        const data = { pull_number, repo, model, token };
        const res = await StreamHandler(event, data);
        setMessagesState(res);
        setError(null); // Reset error state upon successful submission
        setIsLoading(false); // Set loading state to false upon successful submission
      } catch (error) {
        setError(error.message);
      }
    },
    [pull_number, repo, model, StreamHandler, token, setMessagesState]
  ); // Dependencies for useCallback

  const handleRepoNameChange = useCallback((e) => {
    setRepoName(e.target.value);
  }, []);

  const handlePrNumberChange = useCallback((e) => {
    setPrNumber(e.target.value);
  }, []);

  return (
    <Grid textAlign="center" style={{ height: "15vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 800 }}>
        <Form size="large" onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <Segment>
            <Dimmer active={isLoading}>
              <Loader indeterminate>Reviewing Pull Request</Loader>
            </Dimmer>

            <FormGroup>
              <FormField inline>
                <Label pointing="right" color="teal">
                  Review Model:<LabelDetail>{model}</LabelDetail>
                </Label>
                <Input
                  placeholder="Repo Name"
                  onChange={handleRepoNameChange}
                  value={repo}
                  style={{ padding: "1px" }}
                />
              </FormField>
              <FormField inline>
                <Input
                  placeholder="PR Number"
                  onChange={handlePrNumberChange}
                  value={pull_number}
                  style={{ padding: "1px" }}
                />
              </FormField>

              <FormField inline>
                <Button color="teal" size="large">
                  Review
                </Button>
              </FormField>
            </FormGroup>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export { PullRequestForm };
