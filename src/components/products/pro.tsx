import React, { useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/get-category-products?page=${page}&size=14&sort=createdAt&order=ASC&category=${currentPage}`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newData.length > 0);
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  }, [page, currentPage]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight && !loading && hasMore) {
      fetchData();
    }
  }, [loading, hasMore, fetchData]);

  useEffect(() => {
    fetchData();
  }, []); // Run only on initial mount

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Attach and clean up the scroll event listener

  // Render the fetched data
  return (
    <div>
      {data.map((post: any, index: any) => (
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
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProductList;
