import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./product-card";
import useMediaQuery from "../../hooks/use-media-query";

const ProductList = (props: any) => {
  const data = props.data;
  const { isMobile, isDesktop, isTablet } = useMediaQuery();

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      marginLeft="250px"
      style={{
        marginLeft: isMobile ? "-5px" : isDesktop ? "230px" : "180px",
        marginBottom: isMobile ? "5px" : "15px",
        marginTop: isDesktop ? 60 : isTablet ? 8 : 60,
      }}
    >
      {data.map((post: any, index: any) => {
        return (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            display="flex"
            marginTop="15px"
            key={index}
          >
            <ProductCard post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
