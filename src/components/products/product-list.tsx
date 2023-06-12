import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  console.log("currentpage" + currentPage);

  const [data, setData] = useState<any[]>([]);

  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const previousInputValue = useRef("");

  console.log("aswa" + currentPage !== previousInputValue.current);
  useEffect(() => {
    previousInputValue.current = currentPage;

    console.log("pre" + previousInputValue.current);
    if (currentPage !== previousInputValue.current) {
      console.log("hi");
      window.location.reload();
      getData(currentPage);
    } else {
      getData(currentPage);
    }
  }, [currentPage, isLoading]);
  console.log(previousInputValue.current);
  const history = currentPage;
  console.log(history);

  function getData(currentPage: string) {
    fetch(
      `http://localhost:3001/get-category-products?page=${pageNo}&size=8&sort=createdAt&order=ASC&category=${currentPage}`
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
      style={{ height: 800, overflowY: "auto" }}
    >
      <Grid
        container
        direction="row"
        spacing={2}
        marginLeft="250px"
        style={{
          marginBottom: 50,
          marginTop: 80,
          paddingBottom: 20,
        }}
      >
        {data.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
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
