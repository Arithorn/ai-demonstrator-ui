// import { Link } from "@chakra-ui/layout";

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const items = [
  { key: "/", active: true, name: "Home" },
  { key: "/login", name: "Log In" },
  { key: "/sounds", name: "Text to Speech" },
  { key: "/stream", name: "Streaming Chatbot" },
];

const Layout = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const menuItems = items.map((item) => (
    <Menu.Item
      key={item.key}
      as={Link}
      to={item.key}
      active={pathname == item.key ? true : false}
    >
      {item.name}
    </Menu.Item>
  ));

  return (
    <div>
      <Menu fixed="top">{menuItems}</Menu>
      <Outlet />
    </div>
  );
};

export default Layout;
