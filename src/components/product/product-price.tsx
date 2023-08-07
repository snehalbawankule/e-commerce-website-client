import { Grid } from "@mui/material";
import { ProductTitle } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

const ProductPrice = (props: any) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Grid container display="flex" alignItems="end">
      <Grid item xs={3} sm={3} md={4} lg={4}>
        <ProductTitle
          style={{
            fontSize: isDesktop ? 24 : 15,
            fontWeight: 500,
            marginBottom: -1,
          }}
        >
          ₹{props?.discountPrice}
        </ProductTitle>
      </Grid>
      <Grid item xs={4} sm={4} md={4.3} lg={4.3}>
        <ProductTitle
          style={{
            fontSize: isDesktop ? 12 : 10,
            paddingTop: 0,
            textDecoration: "line-through",
          }}
        >
          M.R.P: ₹{props.actualPrice}
        </ProductTitle>
      </Grid>
      <Grid item xs={3} sm={4} md={3.7} lg={3.7}>
        <ProductTitle style={{ fontWeight: 700, color: "green" }}>
          ({props?.discount}
          {textwrap["%off"]})
        </ProductTitle>
      </Grid>
    </Grid>
  );
};
export default ProductPrice;
