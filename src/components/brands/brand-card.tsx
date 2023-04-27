import React, { useState } from "react";
import { Grid, Card, Box } from "@mui/material";
import { ProductName } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
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
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={id}>
        <Card
          key={post.id}
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box onClick={() => history(`/products/${id}`)}>
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
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BrandCard;
