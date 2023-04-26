import React from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import PickForYouCard from "./pick-for-you-card";

const PickForYou = () => {
  const { isDesktop, isTablet } = useMediaQuery();

  //const articles = useAppSelector((state) => state.articles.article);
  const articles = JSON.parse(localStorage.getItem("articles") || "");

  const art = articles.slice(24, 30);
  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        Picks for you
      </Grid>
      {art.map((post: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={2} display="flex" key={post.id}>
            <PickForYouCard post={post} />
          </Grid>
        );
      })}
      {/* <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LoadMoreButton>
          <Link
            to={`/articles`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {textwrap.LoadMoreArticles}
          </Link>
        </LoadMoreButton>
      </Grid> */}
    </Grid>
  );
};

export default PickForYou;
