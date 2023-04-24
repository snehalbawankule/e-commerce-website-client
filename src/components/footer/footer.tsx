import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "../../hooks/use-media-query";

function Footer() {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const page1 = ["Home", "Articles", "About Us", "Contact"];

  return (
    <Grid
      container
      direction="column"
      sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, background: "#F3F2FF" }}
    >
      <Box display="flex">
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          style={{
            paddingRight: isDesktop ? 40 : "",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          {page1.map((page, index) => (
            <Button key={index}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: isMobile ? 8 : "",
                }}
                to={`/${page}`}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{ marginTop: 3, borderBottomWidth: 3, borderColor: "black" }}
      />

      <Box
        sx={{
          mt: 3,
          mx: isDesktop ? 80 : isTablet ? 45 : 12,
        }}
        display="flex"
        justifyContent="space-evenly"
      >
        <FacebookRoundedIcon
          sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }}
        />
        <TwitterIcon sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }} />
        <InstagramIcon sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }} />
        <YouTubeIcon sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }} />
      </Box>
    </Grid>
  );
}
export default Footer;
