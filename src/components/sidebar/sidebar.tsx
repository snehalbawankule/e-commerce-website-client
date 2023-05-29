import React from "react";
import { useLocation } from "react-router-dom";

import SideNav from "./sidenav";
import { Product123 } from "../../routes";
import Faqs from "../helpcenter/helpcenter";
import ProfileSidebar from "../profile/profile-sidebar";
const Sidebar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const firstName = "/" + pathSegments[1];
  const isCurrentPathMatch = Product123.includes(firstName);
  const currentPath = firstName === "/faqs";
  const currentPath1 = firstName === "/profile";

  return (
    <>
      {isCurrentPathMatch === true ? <SideNav /> : null}
      {currentPath === true ? <Faqs /> : null}
      {currentPath1 === true ? <ProfileSidebar /> : null}
    </>
  );
};

export default Sidebar;
