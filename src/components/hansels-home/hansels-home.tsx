import React from "react";
import { Grid } from "@mui/material";
import Footer from "../footer/footer";
import Category from "../category/category";
import Poster from "../poster/poster";
import NewArrivals from "../new-arrivals";
import Brand from "../brands";
import HandPicked from "../handpicked";

const HanselsHome = () => {
  return (
    <>
      <Grid container display="flex">
        <Poster />
        <NewArrivals />
        <HandPicked />
        <Category />
        <Brand />
        <Footer />
      </Grid>
    </>
  );
};

export default HanselsHome;
