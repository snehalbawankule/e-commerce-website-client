import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Menu, Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "../../hooks/use-media-query";
import { ProfileImage, ProfileText } from "./profile.styled";
import Girl from "../../assets/images/girl.png";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";

const ProfileSidebar = () => {
  const { isDesktop } = useMediaQuery();
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[1];

  const categories = ["profile information", "manage address", "gift cards"];
  const currentUser = useSelector(getUser);

  const firstName =
    currentUser?.firstname?.charAt(0).toUpperCase() +
    currentUser?.firstname?.slice(1);

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
        <ProfileText>Hello {firstName}</ProfileText>
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
        ></Menu>
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
            direction="row"
            style={{
              paddingLeft: isDesktop ? 20 : 40,
              display: "flex",
            }}
          >
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <ProfileImage src={Girl}></ProfileImage>
            </Grid>
            <Grid item xs={6} sm={6} md={9} lg={9}>
              <ProfileText>Hello, {firstName}</ProfileText>
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={12} style={{ marginTop: 10 }}>
              {categories?.map((page, index) => (
                <>
                  <Button
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      color: "#878787",
                      fontSize: 16,
                      textTransform: "capitalize",
                    }}
                    onClick={(event) => handleChange(event, page)}
                  >
                    {page}
                  </Button>
                </>
              ))}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};
export default ProfileSidebar;
