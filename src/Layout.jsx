// import { Link } from "@chakra-ui/layout";

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { Divider, Menu } from "semantic-ui-react";

const items = [
  { key: "/", active: true, name: "Home" },
  { key: "/sounds", name: "Text to Speech" },
  { key: "/stream", name: "Streaming Chatbot" },
  { key: "/images", name: "Picture Creation" },
  { key: "/pullrequest", name: "Pull Request Review" },
  { key: "/login", name: "Log In" },
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
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Outlet />
    </div>
  );
};

export default Layout;
