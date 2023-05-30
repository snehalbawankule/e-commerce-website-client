import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { PostButton } from "./profile.styled";
import { ProductTitle } from "../new-arrivals/new-arrivals.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";

const ManageAddress = () => {
  const dispatch = useAppDispatch();
  const user_address = useAppSelector((state) => state.user.user);
  console.log(user_address);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Grid container style={{ paddingTop: 100, marginLeft: 330 }}>
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
export default ManageAddress;
