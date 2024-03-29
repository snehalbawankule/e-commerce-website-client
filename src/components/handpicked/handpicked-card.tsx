import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { ProductName, ImageBox } from "../new-arrivals/new-arrivals.styled";
import { useNavigate } from "react-router-dom";
import ProductPrice from "../product/product-price";

const HandPickedCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      onClick={() => history(`/products/${id}`)}
      key={id}
      sx={{ display: "grid", marginRight: 10 }}
    >
      <ImageBox
        src={post.image}
        style={{
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post.name}</ProductName>
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

export default HandPickedCard;
