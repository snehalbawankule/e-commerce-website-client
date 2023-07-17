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
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
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
          width: isDesktop ? "18%" : isTablet ? "25%" : "none",
          paddingTop: 80,
          height: "100%",
          position: "absolute",
          backgroundColor: "white",
          transition: ".5s ease",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: isMobile ? "none" : "flex",
          }}
        >
          <Grid
            container
            direction="column"
            style={{
              paddingLeft: 10,
              display: "flex",
            }}
          >
            <CategoryName onClick={() => navigate("/" + currentPage)}>
              {currentPage}
            </CategoryName>
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
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      color: "black",
                      fontSize: 18,
                      marginLeft: isDesktop ? 10 : "none",
                      textTransform: "capitalize",
                    }}
                    onClick={(event) =>
                      handleChange2(event, page.name, page1.name)
                    }
                  >
                    <Typography color="gray">{page1.name}</Typography>
                  </Button>
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
