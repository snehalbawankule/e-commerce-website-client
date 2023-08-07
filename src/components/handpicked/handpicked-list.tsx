import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { addHandPicked } from "../../store/handpicked/services";
import HandPickedCard from "./handpicked-card";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useSelector } from "react-redux";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";
import { getHandPickeds } from "../../store/selectors";

const HandPickedList = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const products = useSelector(getHandPickeds);

  useEffect(() => {
    if (products.length) {
      dispatch(addHandPicked());
    }
  }, [products.length, dispatch]);

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
        <NewArrivalTextWrap style={{ paddingTop: 0 }}>
          {TextWrap.handpickedTitle}
        </NewArrivalTextWrap>
      </Grid>

      <Scroll>
        {products.map((post: any, index: any) => {
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

export default HandPickedList;
