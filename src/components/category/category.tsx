import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CategoryCard from "./category-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addCategory } from "../../store/category/services";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";

const Category = () => {
  const dispatch = useAppDispatch();
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
      paddingLeft="30px"
      style={{
        marginBottom: 10,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={10} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap style={{ paddingTop: 0 }}>
          Category Shop. Limitless Choices
        </NewArrivalTextWrap>
      </Grid>
      <Scroll>
        {categories.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
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
    </Grid>
  );
};

export default Category;
