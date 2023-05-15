import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import NewArrivalsCard from "./new-arrivals-card";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../store/product/services";
import { NewArrivalTextWrap, Scroll } from "./new-arrivals.styled";

const NewArrivals = () => {
  const dispatch = useAppDispatch();
  const newArrivals = useAppSelector((state) => state.products.product);
  useEffect(() => {
    if (newArrivals.length) {
      dispatch(addProduct());
    }
  }, [newArrivals.length, dispatch]);

  return (
    <Grid
      container
      spacing={5}
      paddingLeft="30px"
      style={{
        marginBottom: 50,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={10} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap>
          New Arrivals Style for every story
        </NewArrivalTextWrap>
      </Grid>

      <Scroll>
        {newArrivals.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={2.4}
              lg={2.4}
              display="flex"
              key={index}
            >
              <NewArrivalsCard post={post} />
            </Grid>
          );
        })}
      </Scroll>
    </Grid>
  );
};

export default NewArrivals;
