import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ImageBox } from "./brand.styled";

const BrandCard = (props: any) => {
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
    <Grid container>
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
      </Box>
    </Grid>
  );
};

export default BrandCard;
