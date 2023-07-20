import { useState } from "react";
import { Grid } from "@mui/material";
import { TextWrap02 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Divider, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AddToCardText, Price, ProductName, ProductTitle } from "./cart.styled";
import { actions } from "../../store/cart/slice";
import { actions as action } from "../../store/wishlist/slice";
import { useAppDispatch } from "../../hooks/hooks";
import { useLocation } from "react-router-dom";
const CartCard = (props: any) => {
  const location = useLocation();
  const { post } = props;
  const [quantity, setQuantity] = useState(post.quantity);
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
    const newWishlist = {
      productId: post.productId,
      quantity: event.target.value,
    };
    dispatch(actions.updateCarts(newWishlist));
  };
  const handleWishlist = () => {
    const newWishlist = {
      userId: post?.userId,
      productId: post?.productId,
      quantity: quantity,
      size: post?.size,
      color: post?.color,
    };
    dispatch(action.addWishlist(newWishlist));
  };
  const handleRemove = () => {
    dispatch(actions.removeCart(post.id));
    window.location.reload();
  };
  const { isDesktop, isMobile } = useMediaQuery();

  return (
    <Grid
      container
      sx={{
        pl: isDesktop ? 4 : 0,
        pr: isDesktop ? 4 : 1,
        pt: 1,
        pb: 1.25,
      }}
    >
      <Grid
        item
        xs={3.5}
        sm={3}
        md={2}
        lg={2}
        style={{
          backgroundImage: `url(${post?.product?.image})`,
          height: "130px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid item xs={5} sm={3.5} md={6} lg={6}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductName>{post.product?.brand}</ProductName>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductTitle>{post.product?.name}</ProductTitle>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ProductTitle>Color:{post.color}</ProductTitle>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextWrap02 style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
            {post.product?.size}
          </TextWrap02>
        </Grid>
      </Grid>
      <Grid item sm={1} md={1} lg={1}>
        <Box
          sx={{ minWidth: 120 }}
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <FormControl fullWidth>
            <InputLabel>Qty</InputLabel>
            <Select value={quantity} label="Quantity" onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>5+</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={3.5} sm={4.5} md={3} lg={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Price style={{ fontSize: 25, fontWeight: 600 }}>
            ₹{post.product?.discountPrice}
          </Price>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Price style={{ textDecoration: "line-through" }}>
            {post.product?.actualPrice}
          </Price>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Price style={{ fontWeight: 500, fontSize: 22, color: "green" }}>
            -{post.product?.discount}% off
          </Price>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: isDesktop ? 5 : 4,
            display: "flex",
            textAlign: "end",
          }}
        >
          <Grid item xs={8} sm={8} md={8} lg={8}>
            {location.pathname === "/cart" ? (
              <AddToCardText onClick={handleWishlist}>
                Move to Wishlist{" "}
              </AddToCardText>
            ) : null}
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <AddToCardText
              onClick={handleRemove}
              style={{ color: "red", paddingLeft: 5 }}
            >
              Remove
            </AddToCardText>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Divider style={{ marginTop: 15 }}></Divider>
      </Grid>
    </Grid>
  );
};
export default CartCard;
