import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Button,
  Form,
  FormGroup,
  Grid,
  Segment,
  Dropdown,
  Dimmer,
  Loader,
} from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";
import StatusMessage from "./StatusMessage";
import { voiceOptions } from "../config";

const TTSForm = (props) => {
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [voice, setVoice] = useState(voiceOptions[0].value);
  const login = useRecoilValue(loginState);
  const token = useRecoilValue(jwtState);
  if (!login) {
    return <Navigate replace to="/login" />;
  } else
    return (
      <Segment>
        <Dimmer active={loading}>
          <Loader indeterminate>Preparing Files</Loader>
        </Dimmer>

        <Grid
          textAlign="center"
          style={{ height: "20vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 950 }}>
            <StatusMessage msg={statusMsg} />
            <Form
              size="large"
              onSubmit={async (event) => {
                setLoading(true);
                const res = await props.TTSHandler(event, {
                  voice,
                  message,
                  token,
                });
                setLoading(false);
                setStatusMsg(res.message);
                props.updateFunction();
              }}
            >
              <Segment stacked>
                <FormGroup>
                  <Dropdown
                    defaultValue={voiceOptions[0].value}
                    selection
                    options={voiceOptions}
                    size="small"
                    compact
                    onChange={(e, data) => {
                      console.log(data);
                      setVoice(data.value);
                    }}
                  />

                  <Form.Input
                    fluid
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    width={12}
                    value={message}
                  />
                  <Button color="teal">Generate</Button>
                </FormGroup>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
};

export default TTSForm;
