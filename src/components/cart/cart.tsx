import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import { Divider } from "@mui/material";
import CartSubTotal from "./cart-subtotal";
import Cartlist from "./cart-list";
import { useSelector } from "react-redux";
import { getCarts } from "../../store/selectors";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";

const Cart = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useSelector(getCarts);
  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);
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
          pr: isDesktop ? 5 : 1,
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
          {TextWrap.shoppingCard} ({cart.length} items)
        </Grid>
        <Divider style={{ marginBottom: 15 }}></Divider>
        <Cartlist cart={cart} />
      </Grid>
      <Grid item xs={12} sm={3.5} md={3} lg={3}>
        <CartSubTotal />
      </Grid>
    </Grid>
  );
};

export default Cart;
