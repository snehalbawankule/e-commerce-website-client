import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ImageBox,
  ProductName,
  ProductTitle,
} from "../new-arrivals/new-arrivals.styled";
import ProductPrice from "../product/product-price";

const ProductCard = (props: any) => {
  const { post } = props;

  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleChange = () => {
    history(`/products/${post.id}`);
  };

  return (
    <Box onClick={handleChange} key={post?.id} sx={{ display: "grid" }}>
      <ImageBox
        src={post.image}
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post?.name}</ProductName>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>{post?.title}</ProductTitle>
      </Grid>
      <Grid container display="flex" alignItems="end">
        <ProductPrice
          actualPrice={post.actualPrice}
          discountPrice={post?.discountPrice}
          discount={post?.discount}
        />
      </Grid>
    </Box>
  );
};
export default ProductCard;
