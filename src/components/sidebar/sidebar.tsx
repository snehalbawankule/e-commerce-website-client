import React from "react";
import { useLocation } from "react-router-dom";

import SideNav from "./sidenav";
const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== `/` &&
      location.pathname !== `/login` &&
      location.pathname !== `/products/:id` &&
      location.pathname !== `/wishlist` ? (
        <SideNav />
      ) : null}
    </>
  );
};

export default Sidebar;
