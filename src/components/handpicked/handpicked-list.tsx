import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import PickForYouCard from "./handpicked-card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addHandPicked } from "../../store/handpicked/services";

const HandPicked = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.handPickeds.handPicked);

  useEffect(() => {
    if (articles.length) {
      dispatch(addHandPicked());
    }
  }, [articles.length, dispatch]);

  const art = articles.slice(6, 12);
  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        Pick for you
      </Grid>
      <Grid
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Link
          to={`/handpicked`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          show all
        </Link>
      </Grid>
      {art.map((post: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={2} display="flex" key={post.id}>
            <PickForYouCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HandPicked;
