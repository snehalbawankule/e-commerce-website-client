import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Cart from "../../cart/cart-list";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getCart } from "../../../store/cart/services";
import { TextWrap02 } from "../../user-address/address.styled";

import Box from "@mui/material/Box";
import { TextWrap01 } from "../../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../../hooks/use-media-query";

const OrderPlaced = () => {
  const dispatch = useAppDispatch();
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
  const cart = useAppSelector((state) => state.carts.cart);

  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);
  return (
    <Box sx={{ m: isDesktop ? 15 : isTablet ? 11 : 2, mt: isMobile ? 10 : "" }}>
      <TextWrap02 style={{ color: "green" }}>
        Order placed, thank you!
      </TextWrap02>
      <TextWrap01 style={{ paddingTop: 10, fontSize: 18 }}>
        Conformation will be sent to your email.
      </TextWrap01>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Cart cart={cart} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default OrderPlaced;
