import { useEffect } from "react";
import { Grid } from "@mui/material";
import BrandCard from "./brand-card";
import { useAppDispatch } from "../../hooks/hooks";
import { addBrand } from "../../store/brand/services";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";
import {
  NewArrivalTextWrap,
  Scroll,
} from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useSelector } from "react-redux";
import { getBrands } from "../../store/selectors";

const Brand = () => {
  const dispatch = useAppDispatch();
  const { isDesktop } = useMediaQuery();
  const brands = useSelector(getBrands);

  useEffect(() => {
    if (brands.length) {
      dispatch(addBrand());
    }
  }, [brands.length, dispatch]);

  return (
    <Grid
      container
      style={{
        paddingLeft: isDesktop ? 30 : 3,
        marginBottom: 50,
        paddingBottom: isDesktop ? 20 : 30,
      }}
    >
      <Grid item xs={12} sm={10} md={12} lg={12}>
        <NewArrivalTextWrap>{TextWrap.brandTitle}</NewArrivalTextWrap>
      </Grid>

      <Scroll style={{ marginLeft: 10 }}>
        {brands.map((post: any, index: any) => {
          return (
            <Grid item xs={4} sm={3} md={2} lg={2} display="flex" key={index}>
              <BrandCard post={post} />
            </Grid>
          );
        })}
      </Scroll>
    </Grid>
  );
};

export default Brand;
