import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { ProductName } from "./new-arrivals.styled";
// import ReactionButtons from "../add-reaction";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";
// import { AllReactions } from "../all-reactions/all-reactions";

const NewArrivalsCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  const { isDesktop, isMobile } = useMediaQuery();

  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleChange = () => {
    history(`/products/${id}`);
  };
  // const { isMobile } = useMediaQuery();
  return (
    <Box
      onClick={handleChange}
      key={id}
      sx={{ display: "grid", marginRight: 10 }}
    >
      <Box
        style={{
          height: isDesktop ? "250px" : isMobile ? "130px" : "150px",
          width: isDesktop ? "180px" : isMobile ? "120px" : "120px",
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
      >
        {/* <TextWrap01 style={{ fontSize: 30, textAlign: "end" }}>♡</TextWrap01> */}
      </Box>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post.name}</ProductName>
      </Grid>

      {/* <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>{post.title}</ProductTitle>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductTitle>${post.actualPrice}</ProductTitle>
      </Grid> */}
    </Box>
  );
};

export default NewArrivalsCard;
