import { Input } from "./searchbar.styled";
import { AppBar, Grid } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Account from "../account/account";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { isDesktop } = useMediaQuery();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/wishlist");
  };
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          background: "black",
          color: "white",
          alignItems: "center",
          height: 65,
          display: "flex",
        }}
      >
        <Grid container>
          <Grid
            item
            md={3}
            lg={3}
            style={{
              paddingLeft: isDesktop ? 30 : 10,
            }}
          >
            <TextWrap4>Hansels Foundation</TextWrap4>
          </Grid>
          <Grid
            item
            md={7}
            lg={7}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Input type="text" name="name" placeholder="Search"></Input>
          </Grid>
          <Grid
            item
            md={1}
            lg={1}
            style={{
              paddingLeft: isDesktop ? 15 : 10,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
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

          {/* <Button variant="outlined" onClick={handleNavigation}>
            Login
          </Button> */}
          <Grid item md={1} lg={1}>
            <Account />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};
export default SearchBar;
