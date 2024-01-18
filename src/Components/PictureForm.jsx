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
} from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";
import StatusMessage from "./StatusMessage";
import { voiceOptions } from "../config";

const PictureForm = (props) => {
  const [prompt, setPrompt] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  // const [voice, setVoice] = useState(voiceOptions[0].value);
  const login = useRecoilValue(loginState);
  const token = useRecoilValue(jwtState);
  if (!login) {
    return <Navigate replace to="/login" />;
  } else
    return (
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
              const res = await props.JpgHandler(event, {
                // model,
                prompt,
                token,
              });
              setStatusMsg(res.message);
              props.updateFunction();
            }}
          >
            <Segment stacked>
              <FormGroup>
                {/* <Dropdown
                  defaultValue={voiceOptions[0].value}
                  selection
                  options={voiceOptions}
                  size="small"
                  compact
                  onChange={(e, data) => {
                    console.log(data);
                    setVoice(data.value);
                  }}
                /> */}

                <Form.Input
                  fluid
                  placeholder="Prompt"
                  onChange={(e) => setPrompt(e.target.value)}
                  width={12}
                  value={prompt}
                />
                <Button color="teal">Generate</Button>
              </FormGroup>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
};

export { PictureForm };
