import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import CategoryCard from "./category-card";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addCategory } from "../../store/category/services";

const Category = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.category);

  useEffect(() => {
    if (categories.length) {
      dispatch(addCategory());
    }
  }, [categories.length, dispatch]);

  const category =
    location.pathname === `/` ? categories.slice(0, 6) : categories;

  return (
    <Grid container sx={{ px: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        Shop by category
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
          to={`/category`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          show all
        </Link>
      </Grid>
      {category.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={2} display="flex" key={index}>
            <CategoryCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Category;
