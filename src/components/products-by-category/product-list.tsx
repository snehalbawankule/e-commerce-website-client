import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../store/product/services";
import { useEffect, useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  const dispatch = useAppDispatch();

  const Products = useAppSelector((state) => state.products.product);
  const [products, setProducts] = useState(Products);
  useEffect(() => {
    if (products.length) {
      dispatch(addProduct());

      fetch(
        `http://localhost:3001/get-category-products?page=1&size=12&sort=createdAt&order=ASC&category=${currentPage}`
      )
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        });
    }
  }, [products.length, dispatch, currentPage]);

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          spacing={2}
          marginLeft="330px"
          style={{
            marginBottom: 50,
            paddingBottom: 20,
          }}
        >
          {products.map((post: any, index: any) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                display="flex"
                marginTop="100px"
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
