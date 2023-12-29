import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue, atom, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";

const TTSForm = (props) => {
  const [message, setMessage] = useState("");
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
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form
            size="large"
            onSubmit={async (event) => {
              const res = await props.TTSHandler(event, { message, token });
              console.log(res);
              props.updateFunction();
              // if (res.status === true) {
              //   console.log(res);
              // }
            }}
          >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button color="teal" fluid size="large">
                Generate
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
};

export default TTSForm;
