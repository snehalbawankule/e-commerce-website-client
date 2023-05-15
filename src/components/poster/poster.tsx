import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PostButton, TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { addPoster } from "../../store/poster/services";
import { Link } from "react-router-dom";
const Poster = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  const dispatch = useAppDispatch();
  const posters = useAppSelector((state) => state.posters.poster);

  useEffect(() => {
    if (posters.length) {
      dispatch(addPoster());
      const intervalId = setInterval(() => {
        setIndex((index) => (index + 1) % posters.length);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [posters.length, dispatch]);

  const [index, setIndex] = useState(0);

  return (
    <Grid
      container
      style={{
        justifyContent: "center",

        // backgroundColor: "#aea49b",
        marginTop: 60,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Box
        sx={{
          height: isDesktop ? "370px" : isMobile ? "350px" : "600px",
          mx: 5,
          backgroundColor: "#aea49b",

          borderRadius: 20,
          width: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Grid item xs={6} sm={6} md={7} lg={7}>
          <Box
            sx={{
              height: isDesktop ? "370px" : isMobile ? "350px" : "600px",

              backgroundImage: `url(${posters[index].image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={5}>
          <Grid
            item
            xs={10}
            sm={12}
            md={7}
            lg={6}
            sx={{ pl: isDesktop ? 10 : 3, pt: isDesktop ? 10 : 10 }}
          >
            <TextWrap4>{posters[index].name}</TextWrap4>
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
          <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
            <PostButton
              style={{
                marginLeft: isDesktop ? 40 : 10,
              }}
            >
              <Link
                style={{
                  color: "#F3F2FF",
                  textDecoration: "none",
                }}
                to={`/login`}
              >
                Shop now
              </Link>
            </PostButton>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Poster;
