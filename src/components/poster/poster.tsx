import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import useMediaQuery from "../../hooks/use-media-query";
import { addPoster } from "../../store/poster/services";
import { useSelector } from "react-redux";
import { getPosters } from "../../store/selectors";

const Poster = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  const dispatch = useAppDispatch();
  const posters = useSelector(getPosters);

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
        marginTop: 60,
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          sx={{
            height: isDesktop ? "370px" : isMobile ? "370px" : "600px",
            objectFit: "fill",
            backgroundImage: `url(${posters[index].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Poster;
