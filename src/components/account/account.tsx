import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { PostButton, ProfileImage } from "./account.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { default as TextWrap } from "../../assets/text-file/textwrap.json";

const Account = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(getUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const pages = ["orders", "returns", "wishlist", "profile"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const { isTablet } = useMediaQuery();
  const handleLogOut = () => {
    localStorage.setItem("currentUser", JSON.stringify(""));
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  var profile1 = currentUser?.firstname?.charAt(0).toUpperCase();
  var profile2 = currentUser?.lastname?.charAt(0).toUpperCase();
  var profile = profile1 + profile2;
  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: isTablet ? 10 : "",
      }}
    >
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
              {TextWrap.LogOut}
            </Link>
          </PostButton>
        </Menu>
      </Grid>
    </Grid>
  );
};
export default Account;
