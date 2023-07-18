import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductName, ProductTitle } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
const ProductCard = (props: any) => {
  const { post } = props;
  const { isDesktop } = useMediaQuery();
  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleChange = () => {
    history(`/products/${post.id}`);
  };

  return (
    <Box onClick={handleChange} key={post?.id}>
      <Box
        style={{
          height: isDesktop ? "280px" : "230px",
          width: isDesktop ? "210px" : "170px",
          backgroundImage: `url(${post?.image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.2s ease-in-out",
        }}
        sx={{ display: "grid", justifyContent: "center" }}
        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* <TextWrap01 style={{ fontSize: 30, textAlign: "end" }}>♡</TextWrap01> */}
      </Box>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ProductName style={{ textAlign: "start" }}>{post?.name}</ProductName>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ProductTitle>{post?.title}</ProductTitle>
      </Grid>
      <Grid container display="flex" alignItems="end">
        <Grid item xs={3} sm={4} md={4} lg={4}>
          <ProductTitle
            style={{ fontSize: 24, fontWeight: 500, marginBottom: -3 }}
          >
            ₹{post?.discountPrice}
          </ProductTitle>
        </Grid>
        <Grid item xs={3} sm={4} md={4.3} lg={4.3}>
          <ProductTitle
            style={{ paddingTop: 0, textDecoration: "line-through" }}
          >
            M.R.P: ₹{post?.actualPrice}
          </ProductTitle>
        </Grid>
        <Grid item xs={3} sm={4} md={3.7} lg={3.7}>
          <ProductTitle style={{ fontWeight: 700, color: "green" }}>
            {" "}
            ({post?.discount}% off)
          </ProductTitle>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductCard;
