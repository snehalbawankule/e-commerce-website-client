import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CategoryCard from "./category-card";
import { useAppDispatch } from "../../hooks/hooks";
import { addCategory } from "../../store/category/services";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/selectors";

const Category = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isDesktop, isTablet } = useMediaQuery();
  const categories = useSelector(getCategories);

  useEffect(() => {
    if (categories.length) {
      dispatch(addCategory());
    }
  }, [categories.length, dispatch]);

  return (
    <Grid
      container
      spacing={5}
      style={{
        paddingLeft: isDesktop ? 30 : isTablet ? 0 : 8,
        marginBottom: isDesktop ? 50 : 5,
        paddingBottom: 20,
      }}
    >
      {location.pathname === "/" ? (
        <>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NewArrivalTextWrap>
              Category Shop. Limitless Choices
            </NewArrivalTextWrap>
          </Grid>
          <Scroll>
            {categories.map((post: any, index: any) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={2.4}
                  lg={2.4}
                  display="flex"
                  key={index}
                >
                  <CategoryCard post={post} />
                </Grid>
              );
            })}
          </Scroll>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={10} md={12} lg={12}>
            <NewArrivalTextWrap style={{ marginTop: 80 }}>
              Category Shop. Limitless Choices
            </NewArrivalTextWrap>
          </Grid>
          <Grid container style={{ marginLeft: 50, marginTop: 10 }}>
            {categories.map((post: any, index: any) => {
              return (
                <Grid
                  item
                  xs={6}
                  display="flex"
                  style={{ marginBottom: 10 }}
                  key={index}
                >
                  <CategoryCard post={post} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Category;
