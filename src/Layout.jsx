// import { Link } from "@chakra-ui/layout";

import React from "react";
import { Outlet, Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const items = [
  { key: "/", active: true, name: "Home" },
  { key: "signin", name: "Log In" },
  { key: "sounds", name: "Text to Speech" },
];

const Layout = () => {
  return (
    <div>
      <Menu>
        <Menu.Item as={Link} name="Home" to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} name="login" to="/login">
          Log In
        </Menu.Item>
        <Menu.Item as={Link} name="sounds" to="/sounds">
          Text to Speech
        </Menu.Item>
      </Menu>
      <Outlet />
    </div>
  );
};

export default Layout;
