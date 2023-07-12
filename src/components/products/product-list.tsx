import React, { useState, useEffect, useRef } from "react";
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
  const previousInputValue = useRef("");
  const { isMobile, isDesktop, isTablet } = useMediaQuery();

  useEffect(() => {
    previousInputValue.current = currentPage;

    if (currentPage !== previousInputValue.current) {
      window.location.reload();
      getData(currentPage);
    } else {
      getData(currentPage);
    }
  }, [currentPage, isLoading]);

  function getData(currentPage: string) {
    fetch(
      `http://localhost:3001/get-category-products?page=${pageNo}&size=10&sort=createdAt&order=ASC&category=${currentPage}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (pageNo > 1) {
          let arr = [...data, ...json];

          setData(arr);
          setIsLoading(false);
        } else {
          setData(json);
          setIsLoading(false);
        }
      })

      .catch((error) => {
        alert("Axios GET request failed");
      });
  }

  const firstEvent = (e: any) => {
    var bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom) {
      let pg = pageNo + 1;
      setPageNo(pg);
      getData(currentPage);
    }
  };

  return (
    <Grid
      container
      onScroll={firstEvent}
      style={{
        height: isDesktop ? 750 : isTablet ? 1024 : 800,
        overflowY: "auto",
      }}
    >
      <Grid
        container
        direction="row"
        spacing={2}
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
              md={2.4}
              lg={2.4}
              marginTop="15px"
              display="flex"
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
