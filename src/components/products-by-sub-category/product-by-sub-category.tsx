import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import ProductList from "../product-by-category/product-lists";
import handleScroll from "../product-by-category/handle-scroll";

const Products = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const segments = currentPage.split("/");
  const [data, setData] = useState<any[]>([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [previousPage, setPreviousPage] = useState("");

  const { isDesktop, isTablet } = useMediaQuery();

  useEffect(() => {
    if (currentPage !== previousPage) {
      setPageNo(1);
      setData([]);
      setPreviousPage(currentPage);
    }

    setIsLoading(true);
    getData(currentPage, pageNo);
  }, [currentPage, pageNo, previousPage]);

  function getData(currentPage: string, page: number) {
    fetch(
      `http://localhost:3001/get-sub-category-products?page=${pageNo}&size=10&sort=createdAt&order=ASC&category=${segments[0]}&subCategory=${segments[1]}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (page > 1) {
          let arr = [...data, ...json];
          setData(arr);
        } else {
          setData(json);
        }
        setIsLoading(false);
      })
      .catch(() => {
        alert("Axios GET request failed");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    setData([]);

    getData(currentPage, 1);
  }, [currentPage]);

  return (
    <Grid
      container
      onScroll={(e) => handleScroll(e, isLoading, pageNo, setPageNo)}
      style={{
        height: isDesktop ? 750 : isTablet ? 1024 : 800,
        overflowY: "auto",
      }}
    >
      <ProductList data={data} />
    </Grid>
  );
};
export default Products;
