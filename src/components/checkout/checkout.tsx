import { Grid } from "@mui/material";

import { TextWrap01 } from "./checkout.styled";
import AddressList from "../user-address/delhivery-address";
import PaymentOptions from "../payment/payment";

const Checkout = () => {
  return (
    <div style={{ paddingLeft: 80, marginTop: 70 }}>
      <TextWrap01>Checkout</TextWrap01>
      <Grid container>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <AddressList />
        </Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <PaymentOptions />
        </Grid>
      </Grid>
    </div>
  );
};
export default Checkout;
