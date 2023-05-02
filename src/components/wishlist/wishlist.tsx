import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import WishlistCard from "./wishlist-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addWishlist } from "../../store/wishlist/services";
import { addProduct } from "../../store/product/services";

const Wishlist = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlists.wishlist);
  useEffect(() => {
    if (wishlist.length) {
      dispatch(addWishlist());
    }
  }, [wishlist.length, dispatch]);

  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        Wishlist
      </Grid>
      <Grid
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Link
          to={`/newarrivals`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          show all
        </Link>
      </Grid>
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

export default Wishlist;
