import React, { useState, useCallback } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  FormButton,
  Form,
  FormGroup,
  TextArea,
  Grid,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import { loginState, jwtState } from "../State/state";
import { gptOptions } from "../config";

const ChatForm = ({ ChatHandler, updateFunction }) => {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState(gptOptions[0].value);
  const [error, setError] = useState(null);

  const login = useRecoilValue(loginState);
  const token = useRecoilValue(jwtState);

  if (!login) {
    return <Navigate replace to="/login" />;
  }

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const res = await ChatHandler(event, { message, token, model });
        updateFunction(res);
        setMessage("");
      } catch (error) {
        setError(error.message);
      }
    },
    [message, token, model, ChatHandler, updateFunction]
  );

  const handleMessageChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [setMessage]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        setMessage((prevMessage) => prevMessage + "\n");
      }
    },
    [setMessage]
  );

  const handleModelChange = useCallback(
    (e, data) => {
      console.log(data);
      setModel(data.value);
    },
    [setModel]
  );

  return (
    <Grid textAlign="center" style={{ height: "20vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 950 }}>
        <Form size="large" fluid onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
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
                fluid
                placeholder="Message"
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
                value={message}
                style={{ minHeight: 100 }}
              />
              <FormButton color="teal">Submit</FormButton>
            </FormGroup>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default ChatForm;
