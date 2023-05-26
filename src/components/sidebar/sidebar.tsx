import React from "react";
import { useLocation } from "react-router-dom";

import SideNav from "./sidenav";
import { Product123 } from "../../routes";
import Faqs from "../helpcenter/helpcenter";
const Sidebar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const firstName = "/" + pathSegments[1];
  const isCurrentPathMatch = Product123.includes(firstName);
  const currentPath = firstName === "/faqs";

  return (
    <>
      {isCurrentPathMatch === true ? <SideNav /> : null}
      {currentPath === true ? <Faqs /> : null}
    </>
  );
};

export default Sidebar;
