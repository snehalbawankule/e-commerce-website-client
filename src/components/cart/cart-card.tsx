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
import { useAppDispatch } from "../../hooks/hooks";
const CartCard = (props: any) => {
  const { post } = props;
  const [quantity, setQuantity] = useState(post.quantity);
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };
  const handleRemove = () => {
    dispatch(actions.removeCart(post.id));
    window.location.reload();
  };
  const { isTablet, isDesktop } = useMediaQuery();

  return (
    <>
      <Grid
        container
        sx={{
          px: isDesktop ? 5 : isTablet ? 5 : 4,
          pb: 5,
          direction: "column",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{
            backgroundImage: `url(${post?.product?.image})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid item xs={4} sm={6} md={6} lg={6}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ProductName style={{ paddingTop: 0 }}>
              {post.product?.brand}
            </ProductName>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ProductTitle>{post.product?.name}</ProductTitle>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ProductTitle>Color:{post.color}</ProductTitle>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextWrap02
              style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}
            >
              {post.product?.size}
            </TextWrap02>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={1} md={1} lg={1}>
          <Box sx={{ minWidth: 120 }}>
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
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Price>${post.product?.actualPrice}</Price>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Price style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
              {post.product?.discount}
            </Price>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Price>price</Price>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ mt: isDesktop ? 5 : 3, display: "flex", textAlign: "end" }}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <AddToCardText>Move to Cart </AddToCardText>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <AddToCardText
                onClick={handleRemove}
                style={{ color: "red", padding: 0 }}
              >
                Remove
              </AddToCardText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider style={{ marginTop: 40 }}></Divider>
        </Grid>
      </Grid>
    </>
  );
};
export default CartCard;
