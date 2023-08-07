import { Grid } from "@mui/material";
import OrderCard from "./order-cart";

const Orderlist = (props: any) => {
  const { cart } = props;

  return (
    <Grid container>
      {cart.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={index}>
            <OrderCard key={index} post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Orderlist;
