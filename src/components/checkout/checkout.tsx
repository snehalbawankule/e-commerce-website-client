import { Grid } from "@mui/material";

import { TextWrap01 } from "./checkout.styled";
import AddressList from "../user-address/delhivery-address";
import PaymentOptions from "../payment/payment";
import Review from "./review-cart-items/review";
import CartSubTotal from "../cart/cart-subtotal";
import useMediaQuery from "../../hooks/use-media-query";

const Checkout = () => {
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
  return (
    <div
      style={{
        paddingBottom: isMobile ? "80px" : "",
        paddingLeft: isDesktop ? 80 : isTablet ? 30 : 10,
        marginTop: 70,
        marginRight: 10,
      }}
    >
      <TextWrap01>Checkout</TextWrap01>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <AddressList />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <PaymentOptions />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Review />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CartSubTotal />
        </Grid>
      </Grid>
    </div>
  );
};
export default Checkout;
