import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Menu,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TextWrap01 } from "../new-arrivals/new-arrivals.styled";
import { CategoryName } from "../products/products.styled";
import { addCategory } from "../../store/category/services";
const SideNav = () => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[1];
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.category);
  const category = categories.find((item) => item.name === currentPage);
  useEffect(() => {
    if (categories.length) {
      dispatch(addCategory());
    }
  }, [categories.length, dispatch]);
  const sub_categories = category?.sub_categories;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleChange = (e: any, page: any) => {
    e.preventDefault();
    const convertedString = page.toLowerCase();
    navigate(`/${currentPage}/${convertedString}`);
  };
  const handleChange2 = (e: any, page: any, page1: any) => {
    e.preventDefault();
    const convertedString = page.toLowerCase();
    const convertedString2 = page1.toLowerCase();
    navigate(`/${currentPage}/${convertedString}/${convertedString2}`);
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <TextWrap01 style={{ color: "white" }}>{currentPage}</TextWrap01>
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
          {sub_categories?.map((page, index) => (
            <MenuItem key={index} onClick={handleCloseNavMenu}>
              <Link to={`/${page}`}>{page.name}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      <div
        style={{
          width: "20%",
          paddingTop: 100,
          height: "100%",
          position: "absolute",
          backgroundColor: "white",
          transition: ".5s ease",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: isDesktop ? "flex" : "none",
          }}
        >
          <Grid
            container
            direction="column"
            style={{
              paddingLeft: isDesktop ? 10 : 40,
              display: "flex",
            }}
          >
            <CategoryName> {currentPage}</CategoryName>
            {sub_categories?.map((page, index) => (
              <>
                <Button
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    color: "black",
                    fontSize: 18,
                    textTransform: "capitalize",
                  }}
                  onClick={(event) => handleChange(event, page.name)}
                >
                  {page.name}
                </Button>

                {page.sub_sub_categories.map((page1: any, index1: any) => (
                  <MenuItem
                    key={index1}
                    onClick={(event) =>
                      handleChange2(event, page.name, page1.name)
                    }
                  >
                    <Typography textAlign="center" color="gray">
                      {page1.name}
                    </Typography>
                  </MenuItem>
                ))}
              </>
            ))}
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};
export default SideNav;
