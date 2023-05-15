import React from "react";
import { Link } from "react-router-dom";
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
  const { isDesktop } = useMediaQuery();

  const pages = ["grocery", "electronics", "fashion", "home", "beauty"];
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
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
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

        <Box
          sx={{
            flexGrow: 1,
            display: isDesktop ? "flex" : "none",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={12}
            lg={12}
            style={{
              paddingLeft: isDesktop ? 10 : 40,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page, index) => (
              <Button key={index} onClick={handleCloseNavMenu}>
                <Link
                  style={{
                    color: "black",
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
