import React from "react";
import { Link } from "react-router-dom";
import { Menu, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { PostButton, ProfileImage } from "./account.styled";

const Account = () => {
  const pages = ["orders", "returns", "wishlist", "profile"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleLogOut = () => {
    localStorage.setItem("currentUser", JSON.stringify(""));
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  var profile = currentUser?.name?.charAt(0);

  return (
    <Grid container>
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
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Typography>
            </MenuItem>
          ))}

          <PostButton onClick={handleLogOut}>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to={`/login`}
            >
              LogOut
            </Link>
          </PostButton>
        </Menu>
      </Grid>
    </Grid>
  );
};
export default Account;
