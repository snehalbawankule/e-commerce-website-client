import { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";
import { useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import { ProductName } from "./cart.styled";
import { PostButton } from "../navbar/navbar.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { actions as action } from "../../store/order/slice";
import { useSelector } from "react-redux";
import { getCarts } from "../../store/selectors";

const CartSubTotal = () => {
  const location = useLocation();
  const { isDesktop, isMobile } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useSelector(getCarts);

  const navigate = useNavigate();
  const navCheckout = () => {
    navigate("/checkout");
  };
  const navOrderPlaced = () => {
    const storedDataAsString = sessionStorage.getItem("shipping_address");

    let storedData;
    if (storedDataAsString) {
      // If the shipping address exists, parse it from JSON
      storedData = JSON.parse(storedDataAsString);
    }
    const newWishlist = {
      userId: cart[0].userId,
      shippingAddress: storedData.shipping_address,
      totalCost: subTotal,
      items: cart.map((item: any) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };

    dispatch(action.addOrder(newWishlist));
    navigate("/order placed");
  };

  var totalPrice = 0,
    discount = 0,
    subTotal = 0,
    Delhivery = 99,
    saved = 0,
    quantity = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].product.actualPrice * cart[i].quantity;
    quantity += cart[i].quantity;
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
          p: 1,
          ml: isMobile ? 1 : 0,
          backgroundColor: "white",
          mt: isMobile ? 1 : 5,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductName style={{ paddingTop: 0, fontWeight: 700 }}>
            {TextWrap.priceDetails}
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
          <ProductName>
            {TextWrap.price} ({quantity}items)
          </ProductName>
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
          <ProductName>{TextWrap.discount}</ProductName>
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
          <ProductName>{TextWrap.deliveryCharges}</ProductName>
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
          <ProductName>{TextWrap.totalAmount}</ProductName>
          <ProductName style={{ fontWeight: 700 }}>{subTotal}</ProductName>
        </Grid>
        <ProductName style={{ color: "green" }}>
          {TextWrap.youWillSave} {saved} {TextWrap.onThisOrder}
        </ProductName>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mb: isDesktop ? 0 : 2 }}
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
              {TextWrap.proccedToBuy}
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
                {TextWrap.placeOrder}
              </PostButton>
            </>
          )}
        </Grid>
      </Card>
    </Grid>
  );
};

export default CartSubTotal;
