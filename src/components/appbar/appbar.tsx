import { AppBar, Grid, Toolbar } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRef, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Account from "../account/account";
import { useNavigate } from "react-router-dom";
import { PostButton } from "../account/account.styled";
import SearchBar from "../searchbar";
import Navbar from "../navbar/navbar";
import NotificationBadge from "react-notification-badge";
import { useAppDispatch } from "../../hooks/hooks";
import { getCart } from "../../store/cart/services";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconName } from "./appbar.styled";
import { useSelector } from "react-redux";
import { getCarts } from "../../store/selectors";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";

const Appbar = () => {
  const badgeRef = useRef(null);
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const cart = useSelector(getCarts);
  useEffect(() => {
    if (cart.length) {
      dispatch(getCart());
    }
  }, [cart.length, dispatch]);

  const handleWishlist = () => {
    if (currentUser === "") navigate("/login");
    else navigate("/wishlist");
  };
  const handleCart = () => {
    if (currentUser === "") navigate("/login");
    else navigate("/cart");
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
  const homePage = () => {
    navigate("/");
  };
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
            xs={5}
            sm={1.5}
            md={2}
            lg={2}
            style={{
              paddingLeft: isDesktop ? 30 : 5,
            }}
          >
            <TextWrap4
              onClick={homePage}
              style={{ marginTop: isDesktop ? 12 : isTablet ? 19 : 12 }}
            >
              {TextWrap.WebsiteName}
            </TextWrap4>
            <Grid item style={{ display: isMobile ? "flex" : "none" }}>
              <Navbar />
            </Grid>
          </Grid>

          <Grid
            item
            sm={4.5}
            md={4}
            lg={4}
            style={{
              display: isMobile ? "none" : "block",
            }}
          >
            <Navbar />
          </Grid>

          <Grid item xs={6.5} sm={3.6} md={4} lg={4}>
            <SearchBar />
          </Grid>
          <Grid
            item
            sm={1.4}
            md={1.2}
            lg={1.2}
            style={{
              paddingTop: 15,
              paddingLeft: 20,
              justifyContent: "center",
              display: isMobile ? "none" : "flex",
            }}
          >
            <FavoriteBorderIcon
              sx={{ fontSize: 35, paddingRight: isDesktop ? 1 : "" }}
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
                sx={{ fontSize: 35, paddingLeft: 2 }}
                onClick={handleCart}
              />
            </div>
          </Grid>
          <Grid
            item
            sm={1}
            md={0.8}
            lg={0.8}
            style={{ display: isMobile ? "none" : "block" }}
            alignItems="center"
          >
            {currentUser === "" ? (
              <PostButton style={{ color: "black" }} onClick={handleLogin}>
                {TextWrap.Login}
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
              <IconName>{TextWrap.Home}</IconName>
            </Grid>

            <Grid item xs={2.4} sm={2.4}>
              <StorefrontIcon
                sx={{ fontSize: 30, justifyContent: "center" }}
                onClick={handleCategory}
              />
              <IconName>{TextWrap.Category}</IconName>
            </Grid>
            <Grid item xs={2.4} sm={2.4}>
              <FavoriteBorderIcon
                sx={{ fontSize: 30 }}
                onClick={handleWishlist}
              />
              <IconName>{TextWrap.WishList}</IconName>
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
                <IconName>{TextWrap.Cart}</IconName>
              </div>
            </Grid>
            <Grid item xs={2.4} sm={2.4} alignItems="baseline">
              <PersonOutlinedIcon
                sx={{ fontSize: 30 }}
                onClick={handleAccount}
              />
              <IconName>{TextWrap.account}</IconName>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Appbar;
