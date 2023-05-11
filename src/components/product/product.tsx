import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addProduct } from "../../store/product/services";
import { PostButton } from "../navbar/navbar.styled";
import Size from "../size/size";

const Product = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const existingPost = useAppSelector((state) => state.products.product);
  const post = existingPost.find((item: any) => item.id === id);

  const { isTablet, isDesktop } = useMediaQuery();

  useEffect(() => {
    dispatch(addProduct());
  }, [dispatch]);

 const handleWishlist=()=>{
    // dispatch(actions.addLike(newLike));

 }
  return (
    <Grid
      container
      sx={{
        mt: isDesktop ? 5 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 5 : 4,
        pb: 10,
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        style={{
          backgroundImage: `url(${post?.image})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ paddingTop: 0 }}>{post?.name}</TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
            {post?.title}
          </TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03 style={{ fontWeight: 500, fontSize: 18 }}>
            ${post?.actualPrice}
          </TextWrap03>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03>{post?.description}</TextWrap03>
        </Grid>
        <Grid item>
          <Size />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ mt: isDesktop ? 5 : 3 }}>
          <PostButton>Add to bag</PostButton>
          <PostButton style={{ marginLeft: 10 }} onClick={handleWishlist}>Add to wishlist</PostButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Product;
