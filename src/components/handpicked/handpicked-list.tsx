import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addHandPicked } from "../../store/handpicked/services";
import HandPickedCard from "./handpicked-card";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";

const HandPickedList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.handPickeds.handPicked);

  useEffect(() => {
    if (products.length) {
      dispatch(addHandPicked());
    }
  }, [products.length, dispatch]);

  return (
    <Grid
      container
      spacing={5}
      paddingLeft="30px"
      style={{
        // backgroundColor: "#Cdbdc4",
        marginBottom: 50,
        paddingBottom: 20,
      }}
    >
      <Grid item xs={10} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap style={{ paddingTop: 0 }}>
          Discovered the Perfect Piece for you!
        </NewArrivalTextWrap>
      </Grid>

      <Scroll>
        {products.map((post: any, index: any) => {
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
              <HandPickedCard post={post} />
            </Grid>
          );
        })}
      </Scroll>
    </Grid>
  );
};

export default HandPickedList;