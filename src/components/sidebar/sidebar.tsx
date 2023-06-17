import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./sidenav";
import { Product123 } from "../../routes";
import Faqs from "../helpcenter/helpcenter";
import ProfileSidebar from "../profile/profile-sidebar";
import useMediaQuery from "../../hooks/use-media-query";

const Sidebar = () => {
  const location = useLocation();
  const { isMobile } = useMediaQuery();
  const pathSegments = location.pathname.split("/");
  const firstName = "/" + pathSegments[1];
  const isCurrentPathMatch = Product123.includes(firstName);
  const currentPath = firstName === "/faqs";
  const currentPath1 = firstName === "/profile";

  return (
    <div style={{ display: isMobile ? "none" : "flex" }}>
      {isCurrentPathMatch === true ? <SideNav /> : null}
      {currentPath === true ? <Faqs /> : null}
      {currentPath1 === true ? <ProfileSidebar /> : null}
    </div>
  );
};

export default Sidebar;
