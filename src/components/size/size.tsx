import React from "react";
import { Grid } from "@mui/material";
import SizeCard from "./size-card";
import { TextWrap03 } from "./size.styled";

const Size = () => {
  const size = ["xs", "s", "m", "l", "xl", "2xl", "3xl"];
  return (
    <>
      <TextWrap03>Size</TextWrap03>
      <Grid
        container
        style={{ marginTop: 15, display: "flex", alignItems: "center" }}
      >
        {size.map((post: any, index: any) => {
          return <SizeCard post={post} />;
        })}
      </Grid>
    </>
  );
};

export default Size;
