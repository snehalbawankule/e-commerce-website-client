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

  return (
    <Grid container>
      <Toolbar>
        <Grid
          item
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <IconButton size="small" onClick={handleOpenNavMenu} color="inherit">
            Account
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
