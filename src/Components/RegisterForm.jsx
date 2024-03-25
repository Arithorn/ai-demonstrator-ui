import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
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

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const res = await props.registerHandler({ email, password }); // Assuming event is not used in the handler function
      if (res.status === true) {
        setRedirect("/login");
      } else {
        setMessage(res.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage("An error occurred during registration. Please try again."); // Update the UI with a user-friendly error message
    }
  };

  // Redirect the user if `redirect` state is updated
  if (redirect) {
    return <Navigate replace to={redirect} />;
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/* Optional: If you plan to include a logo, indicate it here */}
          Register your account
        </Header>
        <Message>{message}</Message>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
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
