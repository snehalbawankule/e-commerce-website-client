import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  const [data, setData] = useState<any[]>([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [previousPage, setPreviousPage] = useState("");

  const { isMobile, isDesktop, isTablet } = useMediaQuery();

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
      .catch((error) => {
        alert("Axios GET request failed");
        setIsLoading(false);
      });
  }

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const bottom =
      target.scrollHeight - target.scrollTop - target.clientHeight < 50;
    if (bottom && !isLoading) {
      const nextPage = pageNo + 1;
      setPageNo(nextPage);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setData([]);

    getData(currentPage, 1);
  }, [currentPage]);

  return (
    <Grid
      container
      onScroll={handleScroll}
      style={{
        height: isDesktop ? 750 : isTablet ? 1024 : 800,
        overflowY: "auto",
      }}
    >
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
        {data.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={3}
              display="flex"
              marginTop="40px"
              key={index}
            >
              <ProductCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProductList;
