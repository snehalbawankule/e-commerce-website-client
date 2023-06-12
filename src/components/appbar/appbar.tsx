import { AppBar, Grid, Toolbar } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRef } from "react";
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
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconName } from "./appbar.styled";

const Appbar = () => {
  const badgeRef = useRef(null);
  const { isDesktop, isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.carts.cart);
  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);

  const handleWishlist = () => {
    navigate("/wishlist");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleAccount = () => {
    navigate("/account");
  };
  const handleCategory = () => {
    navigate("/category");
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          background: "white",
          color: "black",

          height: 65,
          display: "flex",
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Grid
            item
            xs={4}
            sm={2}
            md={2}
            lg={2}
            style={{
              paddingLeft: isDesktop ? 30 : 10,
            }}
          >
            <TextWrap4>ShopMaven</TextWrap4>
            <Grid item style={{ display: isMobile ? "flex" : "none" }}>
              <Navbar />
            </Grid>
          </Grid>

          <Grid
            item
            md={4.5}
            lg={4.5}
            style={{
              display: isMobile ? "none" : "flex",
            }}
          >
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
              display: isMobile ? "none" : "flex",
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
                <NotificationBadge ref={badgeRef} count={cart.length} />
              </div>

              <ShoppingCartOutlinedIcon
                sx={{ fontSize: isDesktop ? 35 : 20, paddingLeft: 2 }}
                onClick={handleCart}
              />
            </div>
          </Grid>
          <Grid
            item
            md={0.8}
            lg={0.8}
            style={{ display: isMobile ? "none" : "flex" }}
            alignItems="baseline"
          >
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
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          background: "white",
          bottom: 0,
          paddingTop: "8px",

          display: isMobile ? "flex" : "none",
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={5}
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              color: "black",

              alignItems: "center",
            }}
          >
            <Grid item xs={2.4} sm={2.4}>
              <HomeOutlinedIcon sx={{ fontSize: 30 }} onClick={handleHome} />
              <IconName>Home</IconName>
            </Grid>

            <Grid item xs={2.4} sm={2.4}>
              <StorefrontIcon
                sx={{ fontSize: 30, justifyContent: "center" }}
                onClick={handleCategory}
              />
              <IconName>Category</IconName>
            </Grid>
            <Grid item xs={2.4} sm={2.4}>
              <FavoriteBorderIcon
                sx={{ fontSize: 30 }}
                onClick={handleWishlist}
              />
              <IconName>Wishlist</IconName>
            </Grid>
            <Grid item xs={2.4} sm={2.4}>
              <div>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    marginTop: -8,
                    paddingLeft: 29,
                  }}
                >
                  <NotificationBadge ref={badgeRef} count={cart.length} />
                </div>

                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 30 }}
                  onClick={handleCart}
                />
                <IconName>Cart</IconName>
              </div>
            </Grid>
            <Grid item xs={2.4} sm={2.4} alignItems="baseline">
              <PersonOutlinedIcon
                sx={{ fontSize: 30 }}
                onClick={handleAccount}
              />
              <IconName>Account</IconName>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Appbar;
