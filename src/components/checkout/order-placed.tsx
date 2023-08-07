import { Grid, Box } from "@mui/material";
import { useEffect } from "react";
import Cart from "../cart/cart-list";
import { useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import { TextWrap02 } from "../user-address/address.styled";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";
import { TextWrap01 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useSelector } from "react-redux";
import { getCarts } from "../../store/selectors";

const OrderPlaced = () => {
  const dispatch = useAppDispatch();
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
  const cart = useSelector(getCarts);

  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);
  return (
    <Box sx={{ m: isDesktop ? 15 : isTablet ? 11 : 2, mt: isMobile ? 10 : "" }}>
      <TextWrap02 style={{ color: "green" }}>
        {TextWrap["orderPlaced!"]}
      </TextWrap02>
      <TextWrap01 style={{ paddingTop: 10, fontSize: 18 }}>
        {TextWrap.conformationEmailMessage}
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
