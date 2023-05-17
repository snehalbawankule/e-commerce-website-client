import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductName, ProductTitle } from "../new-arrivals/new-arrivals.styled";

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
      <Box
        style={{
          height: "250px",
          width: "180px",
          backgroundImage: `url(${post?.image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.2s ease-in-out",
          borderRadius: "16px",
        }}
        sx={{ display: "grid", justifyContent: "center" }}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* <TextWrap01 style={{ fontSize: 30, textAlign: "end" }}>♡</TextWrap01> */}
      </Box>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post?.name}</ProductName>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>{post?.title}</ProductTitle>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>${post?.actualPrice}</ProductTitle>
      </Grid>
    </Box>
  );
};
export default ProductCard;
