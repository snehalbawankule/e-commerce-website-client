import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import { ProductName } from "./cart.styled";

import { PostButton } from "../navbar/navbar.styled";
import { useLocation, useNavigate } from "react-router-dom";
const CartSubTotal = () => {
  const location = useLocation();
  const { isDesktop, isMobile } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);
  const navigate = useNavigate();
  const navCheckout = () => {
    navigate("/checkout");
  };
  const navOrderPlaced = () => {
    navigate("/order placed");
  };

  var totalPrice = 0,
    discount = 0,
    subTotal = 0,
    Delhivery = 99,
    saved = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].product.actualPrice;
    discount += (cart[i].product.actualPrice * cart[i].product.discount) / 100;
    discount = parseFloat(discount.toFixed(2));
    if (totalPrice - discount > 200) {
      saved = discount + Delhivery;
      Delhivery = 0;
    } else {
      saved = discount;
    }
  }
  subTotal = totalPrice - discount + Delhivery;

  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);

  return (
    <Grid>
      <Card
        sx={{
          p: 2,
          ml: isMobile ? 1 : 0,
          backgroundColor: "white",
          mt: isMobile ? 1 : 5,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductName style={{ paddingTop: 0, fontWeight: 700 }}>
            PRICE DETAILS
          </ProductName>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="space-between"
        >
          <ProductName>Price ({cart.length}items)</ProductName>
          <ProductName>{totalPrice}</ProductName>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="space-between"
        >
          <ProductName>Discount</ProductName>
          <ProductName>-{discount}</ProductName>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="space-between"
        >
          <ProductName>Delhivery Charges</ProductName>
          <ProductName>{Delhivery}</ProductName>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="space-between"
        >
          <ProductName>Total Amount</ProductName>
          <ProductName>{subTotal}</ProductName>
        </Grid>
        <ProductName style={{ color: "green" }}>
          you will save {saved} on this order
        </ProductName>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mt: isDesktop ? 0 : 3 }}
        >
          {location.pathname === "/cart" ? (
            <PostButton
              style={{
                backgroundColor: "#FFD814",
                color: "black",
                borderColor: "#FFD814",
              }}
              onClick={navCheckout}
            >
              Proceed to Buy
            </PostButton>
          ) : (
            <>
              {" "}
              <PostButton
                style={{
                  backgroundColor: "#FFD814",
                  color: "black",
                  borderColor: "#FFD814",
                }}
                onClick={navOrderPlaced}
              >
                Place order
              </PostButton>
            </>
          )}
        </Grid>
      </Card>
    </Grid>
  );
};

export default CartSubTotal;
