import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import {
  ProductName,
  ProductTitle,
  ImageBox,
} from "../new-arrivals/new-arrivals.styled";
import { useNavigate } from "react-router-dom";

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
        <Grid item xs={3} sm={4} md={4} lg={4}>
          <ProductTitle
            style={{ fontSize: 24, fontWeight: 500, marginBottom: -3 }}
          >
            ₹{post?.discountPrice}
          </ProductTitle>
        </Grid>
        <Grid item xs={3} sm={4} md={4.3} lg={4.3}>
          <ProductTitle
            style={{ paddingTop: 0, textDecoration: "line-through" }}
          >
            M.R.P: ₹{post?.actualPrice}
          </ProductTitle>
        </Grid>
        <Grid item xs={3} sm={4} md={3.7} lg={3.7}>
          <ProductTitle style={{ fontWeight: 700, color: "green" }}>
            ({post?.discount}% off)
          </ProductTitle>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HandPickedCard;
