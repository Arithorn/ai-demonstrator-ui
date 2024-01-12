import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import {
  FormButton,
  Form,
  FormGroup,
  FormInput,
  Grid,
  Segment,
  Dropdown,
} from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";

import { gptOptions } from "../config";

const ChatForm = (props) => {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState(gptOptions[0].value);
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
          <Form
            size="large"
            fluid
            onSubmit={async (event) => {
              const res = await props.ChatHandler(event, {
                message,
                token,
                model,
              });
              props.updateFunction(res);
              setMessage("");
              // if (res.status === true) {
              //   console.log(res);
              // }
            }}
          >
            <Segment stacked>
              <FormGroup>
                <Dropdown
                  defaultValue={gptOptions[0].value}
                  selection
                  options={gptOptions}
                  size="small"
                  onChange={(e, data) => {
                    console.log(data);
                    setModel(data.value);
                  }}
                />
                <FormInput
                  fluid
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  width={12}
                  value={message}
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
