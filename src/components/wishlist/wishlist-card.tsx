// import { useEffect } from "react";
import { Grid } from "@mui/material";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
// import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PostButton } from "../navbar/navbar.styled";
import Size from "../size/size";

const WishlistCard = (props: any) => {
  const { post } = props;
  const { isTablet, isDesktop } = useMediaQuery();

  return (
    <Grid
      container
      sx={{
        px: isDesktop ? 5 : isTablet ? 5 : 4,
        pb: 10,
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        style={{
          height: 200,
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
        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ mt: isDesktop ? 5 : 3 }}>
          <PostButton>Add to bag</PostButton>
          <PostButton style={{ marginLeft: 10 }}>Add to wishlist</PostButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default WishlistCard;
