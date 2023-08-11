import { Grid } from "@mui/material";
import CartCard from "./shopping-card";

const Cartlist = (props: any) => {
  const { cart } = props;

  return (
    <Grid container>
      {cart.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={index}>
            <CartCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cartlist;
