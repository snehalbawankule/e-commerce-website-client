import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PostButton } from "../navbar/navbar.styled";
import Size from "../size/size";
import { actions } from "../../store/wishlist/slice";
import { actions as action } from "../../store/cart/slice";
import ReviewList from "../rating-and-review/reviews-list";

const Product = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();

  const { isTablet, isDesktop } = useMediaQuery();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const existingPost = useAppSelector((state) => state.products.product);
  const post = existingPost.find((item: any) => item.id === id);

  const [product, setProduct] = useState(post);

  useEffect(() => {
    if (product?.id !== id) {
      fetch(`http://localhost:3001/get-products-by-id?id=${id}`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
    }
  }, [id, product?.id]);
  const [valueFromChild, setValueFromChild] = useState<string | null>(null);

  const handleValueFromChild = (value: string) => {
    setValueFromChild(value);
  };

  const handleWishlist = () => {
    const newWishlist = {
      userId: currentUser.id,
      productId: product?.id,
      quantity: 1,
      size: valueFromChild,
      color: "red",
    };
    dispatch(actions.addWishlist(newWishlist));
  };
  const handleCart = () => {
    const newCart = {
      userId: currentUser.id,
      productId: product?.id,
      quantity: 1,
      size: valueFromChild,
      color: "red",
    };
    dispatch(action.addCart(newCart));
  };
  return (
    <Grid
      container
      sx={{
        mt: isDesktop ? 12 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 5 : 4,
        pb: 4,
      }}
      key={id}
    >
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box
          style={{
            width: "90%",
            height: "100%",
            backgroundImage: `url(${product?.image})`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} style={{ overflowY: "scroll" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ paddingTop: 0 }}>{product?.name}</TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
            {product?.title}
          </TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03 style={{ fontWeight: 500, fontSize: 18 }}>
            ${product?.actualPrice}
          </TextWrap03>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03>{product?.description}</TextWrap03>
        </Grid>

        {product?.category === "women" || product?.category === "men" ? (
          <Size onSendValue={handleValueFromChild} />
        ) : null}

        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ mt: isDesktop ? 5 : 3 }}>
          <PostButton onClick={handleCart}>Add to bag</PostButton>
          <PostButton style={{ marginLeft: 10 }} onClick={handleWishlist}>
            Add to wishlist
          </PostButton>
        </Grid>
        <ReviewList />
      </Grid>
    </Grid>
  );
};
export default Product;
