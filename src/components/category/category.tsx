import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CategoryCard from "./category-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addCategory } from "../../store/category/services";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useLocation } from "react-router-dom";

const Category = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isDesktop, isMobile } = useMediaQuery();
  const categories = useAppSelector((state) => state.categories.category);
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
        paddingLeft: isDesktop ? 30 : 10,
        marginBottom: isDesktop ? 50 : 5,
        paddingBottom: 20,
        marginTop: isMobile ? 35 : "",
      }}
    >
      <Grid item xs={12} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap style={{ paddingTop: 0 }}>
          Category Shop. Limitless Choices
        </NewArrivalTextWrap>
      </Grid>
      {location.pathname === "/" ? (
        <Scroll>
          {categories.map((post: any, index: any) => {
            return (
              <Grid item xs={4} sm={6} md={2} lg={2} display="flex" key={index}>
                <CategoryCard post={post} />
              </Grid>
            );
          })}
        </Scroll>
      ) : (
        <>
          <Grid container style={{ marginLeft: 80, marginTop: 10 }}>
            {categories.map((post: any, index: any) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2.4}
                  lg={2.4}
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
