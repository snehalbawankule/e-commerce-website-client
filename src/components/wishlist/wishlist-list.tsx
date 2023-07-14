import React from "react";
import { Grid } from "@mui/material";
import WishlistCard from "./wishlist-card";

const WishlistList = (props: any) => {
  const { wishlist } = props;

  return (
    <Grid container>
      {wishlist.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={index}>
            <WishlistCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WishlistList;
