import React, { useEffect } from "react";
import { Grid, Divider } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch } from "../../hooks/hooks";
import Cartlist from "./order-list";
import { getOrder } from "../../store/order/services";
import { useSelector } from "react-redux";
import { getOrders } from "../../store/selectors";

const Orders = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const cart = useSelector(getOrders);
  useEffect(() => {
    if (cart.length) {
      dispatch(getOrder());
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
          Orders ({cart.length} items)
        </Grid>
        <Divider style={{ marginBottom: 15 }}></Divider>
        <Cartlist cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Orders;
