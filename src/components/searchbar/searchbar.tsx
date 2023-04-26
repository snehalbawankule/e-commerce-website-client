import { Input } from "./searchbar.styled";
import { AppBar, Button, Grid } from "@mui/material";
import { PostButton, TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Account from "../account/account";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const { isDesktop } = useMediaQuery();
  const navigate = useNavigate();
 

  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          background: "black",
          color: "white",
          alignItems: "center",
          height: 60,
        }}
      >
        <Grid container>
          <Grid
            item
            md={3}
            lg={3}
            style={{
              paddingLeft: isDesktop ? 10 : 10,
              display: "flex",
            }}
          >
            <TextWrap4>Hansels Foundation</TextWrap4>
          </Grid>
          <Grid
            item
            md={3}
            lg={3}
            style={{
              paddingLeft: isDesktop ? 10 : 10,
              display: "flex",
            }}
          >
            <Input type="text" name="name" placeholder="Search"></Input>
            <Account />
            <Button variant="outlined" onClick={handleNavigation}>
              Login
            </Button>
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};
export default SearchBar;
