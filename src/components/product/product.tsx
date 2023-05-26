import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextWrap02, TextWrap03 } from "../new-arrivals/new-arrivals.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { PostButton } from "../navbar/navbar.styled";
import Size from "../size/size";
import { actions } from "../../store/wishlist/slice";
import { actions as action } from "../../store/cart/slice";
import { Product123 } from "../../routes";

const Product = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();

  const { isTablet, isDesktop } = useMediaQuery();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const existingPost = useAppSelector((state) => state.products.product);
  const post = existingPost.find((item: any) => item.id === id);
  console.log(post);
  const [product, setProduct] = useState(post);

  useEffect(() => {
    if (product?.id !== id) {
      fetch(`http://localhost:3001/get-products-by-id?id=${id}`)
        .then((res) => res.json())
        .then((json) => {
          setProduct(json);
        });
    }
  }, [id, product?.id]);
  const [valueFromChild, setValueFromChild] = useState<string | null>(null);

  const handleValueFromChild = (value: string) => {
    setValueFromChild(value);
  };

  const handleWishlist = () => {
    const newWishlist = {
      userEmail: currentUser.email,
      productId: product?.id,
      quantity: 1,
      size: valueFromChild,
      color: "red",
    };
    dispatch(actions.addWishlist(newWishlist));
  };
  const handleCart = () => {
    const newCart = {
      userEmail: currentUser.email,
      productId: product?.id,
      quantity: 1,
      size: valueFromChild,
      color: "red",
    };
    dispatch(action.addCart(newCart));
  };
  return (
    <Grid
      container
      sx={{
        mt: isDesktop ? 12 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 5 : 4,
        pb: 10,
      }}
      key={id}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        style={{
          backgroundImage: `url(${product?.image})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ paddingTop: 0 }}>{product?.name}</TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap02 style={{ fontWeight: 500, fontSize: 18, paddingTop: 0 }}>
            {product?.title}
          </TextWrap02>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03 style={{ fontWeight: 500, fontSize: 18 }}>
            ${product?.actualPrice}
          </TextWrap03>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <TextWrap03>{product?.description}</TextWrap03>
        </Grid>

        {/* {isCurrentPathMatch === true ? (
          <Size onSendValue={handleValueFromChild} />
        ) : null} */}

        <Size onSendValue={handleValueFromChild} />

        <Grid item xs={6} sm={6} md={6} lg={6} sx={{ mt: isDesktop ? 5 : 3 }}>
          <PostButton onClick={handleCart}>Add to bag</PostButton>
          <PostButton style={{ marginLeft: 10 }} onClick={handleWishlist}>
            Add to wishlist
          </PostButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Product;
