import { useEffect, useState } from "react";
import { Grid, Box, Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch } from "../../hooks/hooks";
import { PostButton } from "../navbar/navbar.styled";
import Size from "../size/size";
import { actions } from "../../store/wishlist/slice";
import { actions as action } from "../../store/cart/slice";
import ReviewList from "../rating-and-review/reviews-list";
import ProductPrice from "./product-price";
import { getProducts } from "../../store/selectors";
import { useSelector } from "react-redux";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

const Product = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isTablet, isDesktop, isMobile } = useMediaQuery();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const existingPost = useSelector(getProducts);
  const post = existingPost.find((item: any) => item.id === id);

  const [product, setProduct] = useState(post);

  useEffect(() => {
    if (product?.id !== id) {
      fetch(`http://localhost:3001/get-products-by-id-images?id=${id}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.product_images.length > 0) {
            setBigImage(json.product_images[0].name);
          }

          setProduct(json);
        });
    }
  }, [id, product?.id]);
  const [bigImage, setBigImage] = useState("");

  const showBigImage = (imagePath: any) => {
    setBigImage(imagePath);
  };

  const [valueFromChild, setValueFromChild] = useState<string | null>(null);

  const handleValueFromChild = (value: string) => {
    setValueFromChild(value);
    setErrorMessage(null);
  };
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleWishlist = () => {
    if (currentUser === "") {
      navigate("/login");
    } else {
      const newWishlist = {
        userId: currentUser.id,
        productId: product?.id,
        quantity: 1,
        size: valueFromChild,
        color: "red",
      };
      dispatch(actions.addWishlist(newWishlist));
    }
  };
  const handleCart = () => {
    if (currentUser === "") {
      navigate("/login");
    } else if (
      (product?.category === "women" || product?.category === "men") &&
      !valueFromChild
    ) {
      setErrorMessage("Please select a size");
    } else {
      const newCart = {
        userId: currentUser.id,
        productId: product?.id,
        quantity: 1,
        size: valueFromChild || null,
        color: "red",
      };
      dispatch(action.addCart(newCart));
    }
  };
  return (
    <Grid
      container
      sx={{
        mt: isDesktop ? 12 : isTablet ? 12 : 10,
        px: isDesktop ? 3 : isTablet ? 5 : 4,
        pb: 4,
      }}
      key={id}
    >
      <Grid
        item
        xs={12}
        sm={2}
        md={1.2}
        lg={1.2}
        style={{ marginTop: "-10px" }}
      >
        {product?.product_images?.map((item: any) => {
          return (
            <Box
              key={item.id}
              style={{
                marginTop: 10,
                width: isMobile ? "100%" : "100px",
                height: isMobile ? "400px" : "160px",
                backgroundImage: `url(${item?.name})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => showBigImage(item.name)}
            ></Box>
          );
        })}
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        {product && (
          <Box
            style={{
              width: isMobile ? "100%" : "90%",
              height: isMobile ? "400px" : "100%",
              backgroundImage: `url(${product?.image})`,
              backgroundPosition: "top",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={6.8}
        lg={6.8}
        style={{ overflowY: "scroll" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ paddingTop: 0 }}>{product?.name}</TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
            {product?.title}
          </TextWrap02>
        </Grid>
        <Grid item xs={6} sm={8} md={3.5} lg={3.5} marginTop="25px">
          <ProductPrice
            actualPrice={product?.actualPrice}
            discountPrice={product?.discountPrice}
            discount={product?.discount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03>{product?.description}</TextWrap03>
        </Grid>

        {product?.category === "women" || product?.category === "men" ? (
          <>
            <Size onSendValue={handleValueFromChild} />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </>
        ) : null}

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ mt: isDesktop ? 5 : 3 }}
        >
          <PostButton onClick={handleCart}>{textwrap.addToBag}</PostButton>
          <PostButton style={{ marginLeft: 10 }} onClick={handleWishlist}>
            {textwrap.addToWishlist}
          </PostButton>
        </Grid>
        <ReviewList />
      </Grid>
    </Grid>
  );
};
export default Product;
