import React from "react";
import { Grid } from "@mui/material";
import Background from "./background.jpg";
import Footer from "../footer/footer";
import Category from "../category/category";
import Poster from "../poster/poster";
import NewArrivals from "../new-arrivals";
import Brand from "../brands";
import HandPicked from "../handpicked";

const HanselsHome = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "top",
          backgroundSize: "cover",

          borderRadius: "16px",
        }}
      >
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
