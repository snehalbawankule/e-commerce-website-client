import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import BrandCard from "./brand-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addBrand } from "../../store/brand/services";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";

const Brand = () => {
  const dispatch = useAppDispatch();
  const { isDesktop, isMobile } = useMediaQuery();
  const brands = useAppSelector((state) => state.brands.brand);

  useEffect(() => {
    if (brands.length) {
      dispatch(addBrand());
    }
  }, [brands.length, dispatch]);

  return (
    <Grid
      container
      style={{
        paddingLeft: isDesktop ? 30 : 3,
        marginBottom: isDesktop ? 50 : 5,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={12} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap>Brands. To-Hot-To-Handle</NewArrivalTextWrap>
      </Grid>

      <Scroll style={{ marginLeft: 10 }}>
        {brands.map((post: any, index: any) => {
          return (
            <Grid item xs={4} sm={6} md={2} lg={2} display="flex" key={index}>
              <BrandCard post={post} />
            </Grid>
          );
        })}
      </Scroll>
    </Grid>
  );
};

export default Brand;
