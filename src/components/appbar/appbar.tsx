import { AppBar, Grid } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Account from "../account/account";
import { useNavigate } from "react-router-dom";
import { PostButton } from "../account/account.styled";
import SearchBar from "../searchbar";
import Navbar from "../navbar/navbar";
import NotificationBadge from "react-notification-badge";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getCart } from "../../store/cart/services";
const Appbar = () => {
  const { isDesktop } = useMediaQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);
  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);
  console.log(cart.length);
  const handleWishlist = () => {
    navigate("/wishlist");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <AppBar
      position="fixed"
      style={{
        background: "white",
        color: "black",

        height: 65,
        display: "flex",
      }}
    >
      <Grid container>
        <Grid
          item
          md={2}
          lg={2}
          style={{
            paddingLeft: isDesktop ? 30 : 10,
          }}
        >
          <TextWrap4>ShopMaven</TextWrap4>
        </Grid>

        <Grid item md={4.5} lg={4.5}>
          <Navbar />
        </Grid>
        <Grid item md={3.5} lg={3.5}>
          <SearchBar />
        </Grid>
        <Grid
          item
          md={1.2}
          lg={1.2}
          style={{
            // paddingLeft: isDesktop ? 15 : 10,
            paddingTop: 15,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FavoriteBorderIcon
            sx={{ fontSize: isDesktop ? 35 : 20 }}
            onClick={handleWishlist}
          />
          <div>
            <div
              style={{
                width: 10,
                height: 10,
                marginTop: -8,
                paddingLeft: 45,
              }}
            >
              <NotificationBadge count={cart.length} />
            </div>

            <ShoppingCartOutlinedIcon
              sx={{ fontSize: isDesktop ? 35 : 20, paddingLeft: 2 }}
              onClick={handleCart}
            />
          </div>
        </Grid>
        <Grid item md={0.8} lg={0.8} display="flex" alignItems="baseline">
          {currentUser === "" ? (
            <PostButton
              style={{ color: "black", paddingTop: 20 }}
              onClick={handleLogin}
            >
              Login
            </PostButton>
          ) : (
            <Account />
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default Appbar;
