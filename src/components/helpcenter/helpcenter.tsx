import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Menu, Button, Grid, IconButton, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppDispatch } from "../../hooks/hooks";
import { TextWrap01 } from "../new-arrivals/new-arrivals.styled";
import { CategoryName } from "../product-by-category/products.styled";
import { addHelpCenter } from "../../store/helpcenter/services";
import { getHelpCenter } from "../../store/selectors";
import { useSelector } from "react-redux";

const HelpCenter = () => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[1];
  const dispatch = useAppDispatch();
  const categories = useSelector(getHelpCenter);
  //   const category = categories.find((item) => item.name === "faqs");
  useEffect(() => {
    // if (categories.length) {
    dispatch(addHelpCenter());
  }, [dispatch]);
  //   const sub_categories = category?.sub_categories;

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
          {categories?.map((page, index) => (
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
            {categories?.map((page, index) => (
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
              </>
            ))}
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};
export default HelpCenter;
