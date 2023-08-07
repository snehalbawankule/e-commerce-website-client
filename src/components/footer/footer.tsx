import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Grid } from "@mui/material";
import { Input, TextWrapFooter } from "./footer.styled";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "../../hooks/use-media-query";
import { TextWrap01 } from "../new-arrivals/new-arrivals.styled";

function Footer() {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const page1 = ["Track order", "Shipping", "Returns", "Faqs", "Contact-us"];
  const about = ["About us", "Career", "Cyber security", "Press"];
  return (
    <Grid
      container
      sx={{
        p: isDesktop ? 10 : isTablet ? 2.5 : 3,
        background: "#F3F2FF",
        display: isMobile ? "none" : "flex",
      }}
    >
      <Grid item xs={2} sm={4} md={4} lg={4}>
        <Grid
          item
          xs={2}
          sm={8}
          md={8}
          lg={8}
          style={{
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <TextWrapFooter>
            Subscribe to be the first to know about our special offers
          </TextWrapFooter>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} style={{ paddingTop: 20 }}>
          <Input type="email" name="email" placeholder="Email Address" />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Box display="flex" justifyContent="space-between">
            <FacebookRoundedIcon
              sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }}
            />
            <TwitterIcon
              sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }}
            />
            <InstagramIcon
              sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }}
            />
            <YouTubeIcon
              sx={{ fontSize: isDesktop ? 35 : isTablet ? 25 : 20 }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={2} sm={3} md={3} lg={3}>
        <TextWrapFooter>Help</TextWrapFooter>
        {page1.map((page, index) => (
          <Grid
            item
            xs={2}
            sm={12}
            md={12}
            lg={12}
            key={index}
            style={{
              display: "flex",
              alignItems: "baseline",
              paddingTop: 10,
            }}
          >
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: isDesktop ? 20 : isTablet ? 16 : 8,
              }}
              to={`/${page}`}
            >
              {page}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={2} sm={3} md={3} lg={3}>
        <TextWrapFooter>About Us</TextWrapFooter>
        {about.map((page, index) => (
          <Grid
            item
            xs={2}
            sm={12}
            md={12}
            lg={12}
            key={index}
            style={{
              display: "flex",
              alignItems: "baseline",
              paddingTop: 10,
            }}
          >
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: isDesktop ? 20 : isTablet ? 16 : 8,
              }}
              to={`/${page}`}
            >
              {page}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <TextWrapFooter>Deliver to </TextWrapFooter>
        <TextWrap01
          style={{
            fontSize: isDesktop ? 20 : 16,
            paddingTop: 5,
          }}
        >
          new c comfort, Koramangala -560034
        </TextWrap01>
        <TextWrapFooter style={{ marginTop: 10 }}>Language </TextWrapFooter>
        <TextWrapFooter style={{ marginLeft: 10, fontWeight: 300 }}>
          English{" "}
        </TextWrapFooter>
      </Grid>
    </Grid>
  );
}
export default Footer;
