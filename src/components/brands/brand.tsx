import React from "react";
import { Grid } from "@mui/material";
import biba from "../../assets/images/brand/biba.png";
import chanel from "../../assets/images/brand/chanel.png";
import dg from "../../assets/images/brand/d&g.png";
import hm from "../../assets/images/brand/h&m.png";
import prada from "../../assets/images/brand/prada.png";
import zara from "../../assets/images/brand/zara.png";
import useMediaQuery from "../../hooks/use-media-query";
import BrandCard from "./brandCard";

const Brand = () => {
  const { isDesktop, isTablet } = useMediaQuery();

  const images = [zara, hm, chanel, dg, biba, prada];

  //const articles = useAppSelector((state) => state.articles.article);
  // const articles = JSON.parse(localStorage.getItem("articles") || "");

  // const art = articles.slice(12, 18);
  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        Shop by Brands
      </Grid>
      {images.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={2} display="flex" key={index}>
            <BrandCard post={post} key={post.id} />
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

export default Brand;
