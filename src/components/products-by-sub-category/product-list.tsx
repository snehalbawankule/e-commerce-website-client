/* eslint-disable react-hooks/exhaustive-deps */
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../store/product/services";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/use-media-query";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const segments = currentPage.split("/");
  const dispatch = useAppDispatch();
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const Products = useAppSelector((state) => state.products.product);
  const [products, setProducts] = useState(Products);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (products.length) {
      fetch(
        `http://localhost:3001/get-sub-sub-category-products?page=1&size=12&sort=createdAt&order=ASC&category=${segments[0]}&subCategory=${segments[1]}&sub_subCategory=${segments[2]}`
      )
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          dispatch(addProduct());
          setIsLoading(false);
        });
    }
  }, [
    isLoading,
    products.length,
    dispatch,
    segments[0],
    segments[1],
    segments[2],
  ]);

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          spacing={2}
          marginLeft="330px"
          style={{
            marginLeft: isMobile ? "5px" : isDesktop ? "230px" : "180px",
            marginBottom: isMobile ? "5px" : "15px",
            marginTop: isDesktop ? 60 : isTablet ? 8 : 60,
          }}
        >
          {products.map((post: any, index: any) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={2.4}
                lg={2.4}
                display="flex"
                marginTop="15px"
                key={index}
              >
                <ProductCard post={post} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default ProductList;
