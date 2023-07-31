import React, { useEffect } from "react";
import { Grid } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../store/product/services";
import { NewArrivalTextWrap, Scroll } from "./new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";

import HandPickedCard from "../handpicked/handpicked-card";

const NewArrivals = () => {
  const dispatch = useAppDispatch();
  const { isDesktop } = useMediaQuery();
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
      style={{
        paddingLeft: isDesktop ? 30 : 8,
        marginBottom: isDesktop ? 50 : 5,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={12} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap>
          New Arrivals Style for every story
        </NewArrivalTextWrap>
      </Grid>

      <Scroll>
        {newArrivals.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={6}
              sm={4}
              md={2.4}
              lg={2.4}
              display="flex"
              key={index}
            >
              <HandPickedCard post={post} />
            </Grid>
          );
        })}
      </Scroll>
    </Grid>
  );
};

export default NewArrivals;
