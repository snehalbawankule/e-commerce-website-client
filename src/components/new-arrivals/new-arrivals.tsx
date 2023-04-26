import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import NewArrivalsCard from "./new-arrivals-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../store/services";
import { useLocation } from "react-router-dom";

const NewArrivals = () => {
  const location = useLocation();
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.products.product);
  useEffect(() => {
    if (articles.length) {
      dispatch(addProduct());
    }
  }, [articles.length, dispatch]);

  const art = location.pathname === `/` ? articles.slice(0, 6) : articles;

  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={11} sm={11} md={11} lg={11}>
        New Arrivals
      </Grid>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to={`/newarrivals`}
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          show all
        </Link>
      </Grid>
      {art.map((post: any, index: any) => {
        return (
          <Grid item xs={12} sm={6} md={2} lg={2} display="flex" key={index}>
            <NewArrivalsCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NewArrivals;
