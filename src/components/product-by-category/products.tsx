import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import ProductList from "./product-lists";
import handleScroll from "./handle-scroll";

const Products = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

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
      `http://localhost:3001/get-category-products?page=${page}&size=10&sort=createdAt&order=ASC&category=${currentPage}`
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
