import React from "react";
import { Grid } from "@mui/material";

import Footer from "../footer/footer";
import Category from "../category/category";
import Poster from "../poster/poster";
import NewArrivals from "../new-arrivals";
import Brand from "../brands";
import PickForYou from "../pick-for-you";

const HanselsHome = () => {
  return (
    <>
      <Grid container display="flex">
        <Poster />
        <NewArrivals />
        <PickForYou />
        <Category />
        <Brand />
        <Footer />
      </Grid>
    </>
  );
};

export default HanselsHome;
