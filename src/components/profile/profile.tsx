import React from "react";
import { Link } from "react-router-dom";
import { Menu, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { PostButton, ProfileImage } from "./profile.styled";
import { ProductTitle } from "../new-arrivals/new-arrivals.styled";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  var profile = currentUser?.name?.charAt(0);

  return (
    <Grid container style={{ paddingTop: 100 }}>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>Profile</ProductTitle>
      </Grid>
      <ProductTitle>Personal Details</ProductTitle>
      <ProductTitle>Address</ProductTitle>

      <Grid item>
        <PostButton>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to={`/login`}
          >
            LogOut
          </Link>
        </PostButton>
      </Grid>
    </Grid>
  );
};
export default Profile;
