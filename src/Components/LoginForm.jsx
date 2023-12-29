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

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useSetRecoilState(loginState);
  const login = useRecoilValue(loginState);
  const setJwt = useSetRecoilState(jwtState);
  if (login) {
    return <Navigate replace to="/" />;
  } else
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            {/* <Image src="/logo.png" />  */}
            Log-in to your account
          </Header>
          <Form
            size="large"
            onSubmit={async (event) => {
              const res = await props.loginHandler(event, email, password);
              setLogin(res.status);
              if (res.status === true) {
                setJwt(res.token);
              }
            }}
          >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
};

export default LoginForm;
