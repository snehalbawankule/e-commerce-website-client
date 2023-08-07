import React, { useEffect } from "react";
import { Card, Grid, Divider } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";

import { useAppDispatch } from "../../hooks/hooks";
import { getWishlists } from "../../store/wishlist/services";
import {
  AddToCardText,
  Price,
  ProductName,
  ProductTitle,
} from "./wishlist.styled";
import Bag from "../../assets/images/bag.png";
import WishlistList from "./wishlist-list";
import { useSelector } from "react-redux";
import { getWishlist } from "../../store/selectors";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

const Wishlist = () => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  const dispatch = useAppDispatch();
  const wishlist = useSelector(getWishlist);

  useEffect(() => {
    if (wishlist.length) {
      dispatch(getWishlists());
    }
  }, [wishlist.length, dispatch]);

  return (
    <Grid container marginTop="80px" paddingRight="12px" spacing={2}>
      <Grid
        item
        xs={12}
        sm={8.5}
        md={9}
        lg={9}
        sx={{
          pl: isDesktop ? 5 : isTablet ? 0 : 1,
          pr: isDesktop ? 5 : isTablet ? 3 : 1,
        }}
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={8}
          lg={8}
          style={{
            paddingBottom: 20,

            paddingLeft: 10,
            fontWeight: "bold",
          }}
        >
          {textwrap.WishList}
        </Grid>
        <Divider style={{ marginBottom: 15 }}></Divider>
        <WishlistList wishlist={wishlist} />
      </Grid>
      <Grid item xs={12} sm={3.5} md={3} lg={3} style={{ padding: 10 }}>
        <Card
          sx={{
            p: 1,
            ml: isMobile ? 1 : 0,
            backgroundColor: "white",
            mt: isMobile ? 1 : 5,
          }}
        >
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
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ProductName style={{ paddingTop: 0 }}>
                Deals on frequently repurchased items
              </ProductName>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ProductTitle>Buy anything under $99</ProductTitle>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Price style={{ justifyContent: "start" }}>99</Price>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ mt: isDesktop ? 5 : 1 }}
            >
              <AddToCardText>Add to Cart </AddToCardText>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Wishlist;
