import { useState } from "react";
// import axios from "axios";
import {
  Input,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
} from "../registration/registration.styled";
import { Box, Grid } from "@mui/material";
import { default as textwrap } from "../../assets/text-file/textwrap.json";
// import { useGoogleLogin } from "@react-oauth/google";
import Rectangle1 from "../../assets/images/shop.jpg";

import useMediaQuery from "../../hooks/use-media-query";

const ContactUs = () => {
  const { isMobile, isDesktop } = useMediaQuery();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // if (userInfo.password === confirm_password) {
    //   axios
    //     .post("http://localhost:3001/postuser", {
    //       email: userInfo.email,
    //       name: userInfo.name,
    //       profile: userInfo.profile,
    //       password: userInfo.password,
    //     })
    //     .then(() => {
    //       navLogin();
    //     });
    // } else {
    //   alert("Passwords Don't Match");
    // }
  };
  return (
    <>
      <Grid container style={{ background: "white" }}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Box
            style={{
              backgroundImage: `url(${Rectangle1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={6}
              sx={{ pl: isDesktop ? 10 : 4, pt: isDesktop ? 5 : 1 }}
            >
              <TextWrap4>{textwrap.title}</TextWrap4>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{ px: isDesktop ? 4 : "" }}
          style={{
            textAlign: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Box sx={{ pt: isDesktop ? 10 : 3 }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextWrap1>Contact Us</TextWrap1>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: 4 }}>
                <Input
                  type="text"
                  name="name"
                  onBlur={handleChange}
                  defaultValue={contactInfo.name}
                  placeholder="Name"
                  minLength={5}
                  maxLength={10}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onBlur={handleChange}
                  defaultValue={contactInfo.email}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="text"
                  name="contact"
                  onBlur={handleChange}
                  defaultValue={contactInfo.contact}
                  placeholder="Contact No"
                  maxLength={10}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="text"
                  name="message"
                  onBlur={handleChange}
                  defaultValue={contactInfo.message}
                  placeholder="Enter the message"
                  maxLength={100}
                  required
                />
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default ContactUs;
