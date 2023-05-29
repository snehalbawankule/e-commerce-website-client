import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../store/product/services";
import { useEffect, useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const segments = currentPage.split("/");

  const dispatch = useAppDispatch();

  const Products = useAppSelector((state) => state.products.product);
  const [products, setProducts] = useState(Products);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (products.length) {
      fetch(
        `http://localhost:3001/get-sub-category-products?page=1&size=12&sort=createdAt&order=ASC&category=${segments[0]}&subCategory=${segments[1]}`
      )
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          dispatch(addProduct());
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, products.length, dispatch, segments[0], segments[1]]);

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          spacing={2}
          marginLeft="250px"
          style={{
            marginBottom: 50,
            paddingBottom: 20,
            marginTop: 80,
          }}
        >
          {products.map((post: any, index: any) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
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
