import React, { useEffect } from "react";
import { Grid } from "@mui/material";

import { useAppDispatch } from "../../hooks/hooks";
import { addProduct } from "../../store/product/services";
import { NewArrivalTextWrap, Scroll } from "./new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { default as textwrap } from "../../assets/text-file/textwrap.json";
import HandPickedCard from "../handpicked/handpicked-card";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/selectors";

const NewArrivals = () => {
  const dispatch = useAppDispatch();
  const { isDesktop, isTablet } = useMediaQuery();
  const newArrivals = useSelector(getProducts);
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
        paddingLeft: isDesktop ? 30 : isTablet ? 0 : 8,
        marginBottom: isDesktop ? 50 : 5,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NewArrivalTextWrap>{textwrap.NewArrivalTitle}</NewArrivalTextWrap>
      </Grid>

      <Scroll>
        {newArrivals.map((post: any, index: any) => {
          return (
            <Grid
              item
              xs={6}
              sm={3}
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
