import React from "react";
import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Grid,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";

import StatusMessage from "./StatusMessage";
import { handleLogin } from "../Handlers/handleLogin";

const PictureForm = (props) => {
  const [prompt, setPrompt] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = handleLogin("/images");
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
              const res = await props.JpgHandler(event, {
                prompt,
                token,
              });
              setStatusMsg(res.message);
              setLoading(false);
              props.updateFunction();
            }}
          >
            <Segment stacked>
              <FormGroup>
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
    </Segment>
  );
};

export { PictureForm };
