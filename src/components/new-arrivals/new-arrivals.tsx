import React from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import NewArrivalsCard from "./new-arrivals-card";

const NewArrivals = () => {
  const { isDesktop, isTablet } = useMediaQuery();

  //const articles = useAppSelector((state) => state.articles.article);
  const articles = JSON.parse(localStorage.getItem("articles") || "");
  console.log(articles);
  const art = articles.slice(0, 6);
  return (
    <Grid container sx={{ p: isDesktop ? 8 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        New Arivals
      </Grid>
      {art.map((post: any) => {
        return (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={2}
              display="flex"
              key={post.id}
            >
              <NewArrivalsCard post={post} />
            </Grid>
          </>
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

export default NewArrivals;
