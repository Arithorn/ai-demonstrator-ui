// import { Link } from "@chakra-ui/layout";

import { Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Menu>
        <MenuButton rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
        {/* <MenuList> */}
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/login">Login</MenuItem>
        <MenuItem href="/register">Register</MenuItem>
        <MenuItem href="/sounds">Text to Speech</MenuItem>
        {/* </MenuList> */}
      </Menu>

      <Outlet />
    </div>
  );
};
export default Layout;
