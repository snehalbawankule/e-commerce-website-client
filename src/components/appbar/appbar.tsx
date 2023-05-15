import { AppBar, Grid } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Account from "../account/account";
import { useNavigate } from "react-router-dom";
import { PostButton } from "../account/account.styled";
import SearchBar from "../searchbar";
import Navbar from "../navbar/navbar";

const Appbar = () => {
  const { isDesktop } = useMediaQuery();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/wishlist");
  };
  const handleNavigation1 = () => {
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

        <Grid item md={5} lg={5}>
          <Navbar />
        </Grid>
        <Grid
          item
          md={3}
          lg={3}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Grid>
        <Grid
          item
          md={1}
          lg={1}
          style={{
            paddingLeft: isDesktop ? 15 : 10,
            paddingTop: 15,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FavoriteBorderIcon
            sx={{ fontSize: isDesktop ? 35 : 20 }}
            onClick={handleNavigation}
          />
          <ShoppingCartIcon
            sx={{ fontSize: isDesktop ? 35 : 20, paddingLeft: 2 }}
          />
        </Grid>
        <Grid item md={1} lg={1} display="flex" alignItems="baseline">
          {currentUser === "" ? (
            <PostButton
              style={{ color: "black", paddingTop: 20 }}
              onClick={handleNavigation1}
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
