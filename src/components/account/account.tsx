import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Toolbar,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import { ProfileImage } from "./account.styled";

const Account = () => {
  const pages = ["orders", "returns", "wishlist", "profile", "log out"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const currentUser = JSON.parse(localStorage.getItem("current") || "{}");
  var profile = currentUser.name.charAt(0);
  console.log(profile);

  return (
    <Grid container>
      <Toolbar>
        <Grid item>
          <IconButton size="small" onClick={handleOpenNavMenu} color="inherit">
            <ProfileImage>{profile}</ProfileImage>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: "block",
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={`/${page}`}>{page}</Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Toolbar>
    </Grid>
  );
};
export default Account;
