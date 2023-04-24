import React from "react";
import { Grid } from "@mui/material";

import Footer from "../footer/footer";
import Category from "../category/category";
import Poster from "../poster/poster";
import NewArrivals from "../new-arrivals/new-arrivals";

const HanselsHome = () => {
  return (
    <>
      <Grid container display="flex">
        <Poster />
        <NewArrivals />
        <Category />
        <Footer />
      </Grid>
    </>
  );
};

export default HanselsHome;
