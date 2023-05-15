import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import WishlistCard from "./wishlist-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getWishlist } from "../../store/wishlist/services";
import {
  AddToCardText,
  Price,
  ProductName,
  ProductTitle,
} from "./wishlist.styled";
import Bag from "../../assets/images/bag.png";
import { Divider } from "@mui/material";
const Wishlist = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlists.wishlist);

  useEffect(() => {
    if (wishlist.length) {
      dispatch(getWishlist());
    }
  }, [wishlist.length, dispatch]);

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={10}
          sm={9}
          md={9}
          lg={9}
          sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }}
        >
          <Grid
            item
            xs={10}
            sm={10}
            md={8}
            lg={8}
            style={{ paddingBottom: 20 }}
          >
            Wishlist
          </Grid>
          <Divider style={{ marginBottom: 40 }}></Divider>
          {wishlist.map((post: any, index: any) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                key={index}
              >
                <WishlistCard post={post} />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={10} sm={3} md={3} lg={3} style={{ padding: 10 }}>
          <Card sx={{ p: 2 }}>
            <Card
              style={{
                height: 150,
                width: "100%",
                backgroundImage: `url(${Bag})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
            <Grid item xs={4} sm={6} md={6} lg={6}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductName style={{ paddingTop: 0 }}>
                  Deals on frequently repurchased items
                </ProductName>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductTitle>Buy anything under $99</ProductTitle>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Price>99</Price>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ mt: isDesktop ? 5 : 3 }}
              >
                <AddToCardText>Add to Cart </AddToCardText>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Wishlist;
