import React, { useState, useCallback } from "react"; // Removed useMemo since it's not explicitly used in given adjustments
import { Navigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Button,
  Form,
  FormGroup,
  TextArea,
  Grid,
  Segment,
  Dropdown,
} from "semantic-ui-react"; // Changed FormButton to Button for consistency
import { loginState, jwtState, msgsState } from "../State/state";
import { gptOptions } from "../config";

const StreamForm = ({ StreamHandler, updateStream, updateMessages }) => {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState(gptOptions[0].value);
  const [error, setError] = useState(null);

  const login = useRecoilValue(loginState);
  const token = useRecoilValue(jwtState);
  const messages = useRecoilValue(msgsState);
  const setMessagesState = useSetRecoilState(msgsState);
  if (!login) {
    return <Navigate replace to="/login" />;
  }

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const promptMessage = { role: "user", content: message };
        const res = await StreamHandler(event, {
          promptMessage,
          token,
          model,
          updateStream,
          updateMessages: setMessagesState,
          messages,
        });
        setMessage("");
        setError(null); // Reset error state upon successful submission
      } catch (error) {
        setError(error.message);
      }
    },
    [message, model, StreamHandler, token, setMessagesState]
  ); // Dependencies for useCallback

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e); // Call handleSubmit directly, adjusted for form submission with Enter
      } else if (e.key === "Enter" && e.shiftKey) {
        setMessage((prevMessage) => prevMessage + "\n");
      }
    },
    [handleSubmit]
  );

  const handleModelChange = (e, data) => {
    setModel(data.value);
  };

  return (
    <Grid textAlign="center" style={{ height: "20vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 950 }}>
        <Form size="large" onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <Segment stacked>
            <FormGroup>
              <Dropdown
                defaultValue={gptOptions[0].value}
                selection
                options={gptOptions}
                size="small"
                onChange={handleModelChange}
              />
              <TextArea
      
                placeholder="Prompt"
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
                value={message}
                style={{ minHeight: 10 }}
              />
              <Button color="teal">Submit</Button>
            </FormGroup>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export { StreamForm };
