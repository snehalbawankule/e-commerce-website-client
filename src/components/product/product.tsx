import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addProduct } from "../../store/services";

const Product = () => {
  let { id } = useParams();

  const dispatch = useAppDispatch();
  const existingPost = useAppSelector((state) => state.products.product);
  const post = existingPost.find((item: any) => item.id === id);
  console.log(post);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(addProduct());
  }, [dispatch]);
  function handleSelection() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText && textRef.current) {
      const range = window.getSelection()!.getRangeAt(0);
      const span = document.createElement("span");
      span.className = "highlight";
      range.surroundContents(span);
    }
  }

  return (
    <Grid
      container
      display="flex"
      sx={{
        mt: isDesktop ? 15 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 5 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{
          height: isDesktop ? "350px" : isMobile ? "350px" : "600px",
          backgroundImage: `url(${post?.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ mt: 4 }}
        display="flex"
        justifyContent="center"
      >
        <TextWrap02 ref={textRef} onMouseUp={handleSelection}>
          {post?.name}
        </TextWrap02>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <TextWrap02
          style={{ fontWeight: 500, fontSize: 18 }}
          ref={textRef}
          onMouseUp={handleSelection}
        >
          {post?.title}
        </TextWrap02>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <TextWrap03 ref={textRef} onMouseUp={handleSelection}>
          {post?.description}
        </TextWrap03>
      </Grid>
    </Grid>
  );
};
export default Product;
