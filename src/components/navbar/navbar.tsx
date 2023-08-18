import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Menu,
  Toolbar,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useMediaQuery from "../../hooks/use-media-query";
const Navbar = () => {
  const { isDesktop, isMobile } = useMediaQuery();

  const pages = ["women", "men", "kids", "beauty", "home"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const location = useLocation();

  const activeLinkStyle = {
    backgroundColor: "blue",
    // Add your other styles here
  };

  return (
    <Grid container>
      <Toolbar
        style={{
          paddingLeft: 0,
          marginTop: -25,
          display: isMobile ? "block" : "none",
        }}
      >
        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            style={{ padding: 0 }}
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
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
              display: { xs: "block", md: "none" },
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
      <Toolbar style={{ paddingLeft: 5, paddingRight: 5 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: isMobile ? "none" : "flex",
            alignItems: "center",
          }}
        >
          <Grid item sm={12} md={12} lg={12}>
            {pages.map((page, index) => (
              <Button
                key={index}
                style={location.pathname === page ? activeLinkStyle : {}}
                onClick={handleCloseNavMenu}
                sx={{ minWidth: isDesktop ? "64px" : "50px" }}
              >
                <Link
                  style={{
                    color: "black",
                    fontSize: isDesktop ? "14px" : "11px",
                    textDecoration: "none",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Grid>
        </Box>
      </Toolbar>
    </Grid>
  );
};
export default Navbar;
