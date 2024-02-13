import React from "react";
import { Sidebar } from "react-pro-sidebar";

const ProSidebar = ({ props, children }) => {
  return <Sidebar {...props}>{children}</Sidebar>;
};

export default ProSidebar;
