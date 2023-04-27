import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import BrandCard from "./brand-card";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addBrand } from "../../store/brand/services";

const Brand = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const brands = useAppSelector((state) => state.brands.brand);

  useEffect(() => {
    if (brands.length) {
      dispatch(addBrand());
    }
  }, [brands.length, dispatch]);

  const brand = location.pathname === `/` ? brands.slice(0, 6) : brands;

  return (
    <Grid
      container
      sx={{ px: isDesktop ? 5 : isTablet ? 5 : 3, mb: 5, mt: 1 }}
      spacing={5}
    >
      <Grid item xs={10} sm={10} md={10} lg={10}>
        Shop by Brands
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
          to={`/brand`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          show all
        </Link>
      </Grid>
      {brand.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={2} display="flex" key={index}>
            <BrandCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Brand;
