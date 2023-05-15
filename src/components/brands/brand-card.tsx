import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        <Box
          style={{
            height: "150px",
            width: "150px",
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
      </Box>
    </Grid>
  );
};

export default BrandCard;
