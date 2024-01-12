import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const [message, setMessage] = useState("");
  console.log(redirect);
  if (redirect !== "") {
    <Navigate replace to={redirect} />;
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
            Register your account
          </Header>
          <Message>{message}</Message>
          <Form
            size="large"
            onSubmit={async (event) => {
              const res = await props.registerHandler(event, email, password);
              if (res.status === true) {
                setRedirect("/login");
              } else {
                setMessage(res.message);
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
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Log In</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
};

export default RegisterForm;
