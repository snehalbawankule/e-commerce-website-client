import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { ProductName } from "../new-arrivals/new-arrivals.styled";

import { useNavigate } from "react-router-dom";
const CategoryCard = (props: any) => {
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
  // const { isMobile } = useMediaQuery();
  return (
    <Box
      onClick={() => history(`/${post.name}`)}
      key={id}
      sx={{ display: "grid", marginRight: 10 }}
    >
      <Box
        style={{
          height: "250px",
          width: "180px",
          backgroundImage: `url(${post.image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.2s ease-in-out",
          borderRadius: "16px",
        }}
        sx={{ display: "grid", justifyContent: "center" }}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
      />

      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post.name}</ProductName>
      </Grid>
    </Box>
  );
};

export default CategoryCard;
