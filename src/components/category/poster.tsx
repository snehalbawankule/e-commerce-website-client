import React, { useEffect, useState } from "react";
import picture from "../../assets/images/picture.png";
import Rectangle from "../../assets/images/Rectangle.png";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import { Grid } from "@mui/material";
import { PostButton, TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Poster = () => {
  const { isMobile, isDesktop } = useMediaQuery();
  const images = [
    picture,
    Rectangle,
    Rectangle2,
    picture,
    Rectangle2,
    Rectangle,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <Grid container display="flex">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          height: isDesktop ? "300px" : isMobile ? "350px" : "600px",
          display: "flex-column",
          marginLeft: 50,
          marginRight: 50,
          backgroundImage: `url(${images[index]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={10}
          sm={12}
          md={7}
          lg={6}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 20 : 10 }}
        >
          <TextWrap4>Find your style</TextWrap4>
        </Grid>
        <Grid
          item
          xs={11}
          sm={10}
          md={7}
          lg={7}
          sx={{ pl: isDesktop ? 10 : 3 }}
        >
          <TextWrap4>homeDescription</TextWrap4>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={4}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 10 : 3 }}
        >
          <PostButton>Shop now</PostButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Poster;
