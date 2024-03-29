import { Grid, Divider } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import { Price, ProductName, ProductTitle } from "../cart/cart.styled";
import { PostButton } from "../navbar/navbar.styled";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

const OrderCard = (props: any) => {
  const { post } = props;
  const { isDesktop } = useMediaQuery();

  return (
    <Grid
      container
      sx={{
        pl: isDesktop ? 4 : 0,
        pr: isDesktop ? 4 : 1,
        pt: 1,
        pb: 1.25,
      }}
    >
      {post?.order_items?.map((item: any) => {
        return (
          <>
            <Grid
              item
              xs={3.5}
              sm={3}
              md={2}
              lg={2}
              style={{
                backgroundImage: `url(${item?.product?.image})`,
                height: "130px",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginBottom: 20,
              }}
            />
            <Grid item xs={5} sm={3.5} md={2} lg={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductName>{item.product?.brand}</ProductName>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductTitle>{item.product?.name}</ProductTitle>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ProductTitle>
                  {textwrap.quantity}
                  {item.quantity}
                </ProductTitle>
              </Grid>
            </Grid>

            <Grid item xs={3.5} sm={4.5} md={2} lg={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Price style={{ fontSize: 25, fontWeight: 600 }}>
                  ₹{item.product?.discountPrice}
                </Price>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Price style={{ textDecoration: "line-through" }}>
                  {item.product?.actualPrice}
                </Price>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Price
                  style={{ fontWeight: 500, fontSize: 22, color: "green" }}
                >
                  -{item?.product?.discount}% off
                </Price>
              </Grid>
            </Grid>
            <Grid item xs={3.5} sm={4.5} md={6} lg={6}>
              <Price>{textwrap.viewOrderDetails}</Price>

              <PostButton
                style={{
                  marginLeft: 250,
                  marginTop: 30,
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                {textwrap.writeProductReview}
              </PostButton>
            </Grid>
          </>
        );
      })}

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Divider
          style={{ marginTop: 15, borderTop: "3px solid #bbb" }}
        ></Divider>
      </Grid>
    </Grid>
  );
};
export default OrderCard;
