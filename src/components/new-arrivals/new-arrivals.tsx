import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import NewArrivalsCard from "./new-arrivals-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../store/product/services";
import { useLocation } from "react-router-dom";

const NewArrivals = () => {
  const location = useLocation();
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const newArrivals = useAppSelector((state) => state.products.product);
  useEffect(() => {
    if (newArrivals.length) {
      dispatch(addProduct());
    }
  }, [newArrivals.length, dispatch]);

  const art = location.pathname === `/` ? newArrivals.slice(0, 6) : newArrivals;

  return (
    <Grid container sx={{ p: isDesktop ? 5 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        New Arrivals
      </Grid>
      <Grid
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        style={{ display: "flex", justifyContent: "end" }}
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
