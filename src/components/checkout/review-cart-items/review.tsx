import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Cart from "../../cart/cart-list";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getCart } from "../../../store/cart/services";
import { TextWrap02 } from "../../user-address/address.styled";

const Review = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);

  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);
  return (
    <div style={{ marginTop: 40 }}>
      <TextWrap02>2 Review items & delivery</TextWrap02>
      <Grid container style={{ marginTop: 10, paddingRight: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Cart cart={cart} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Review;
