import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { useState } from "react";
// import axios from "axios";
import {
  CreateAccountButton,
  Input,
  GoogleLogo1,
  SignGoogleButton,
  TextWrap3,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
  TextWrap2,
  LoginLink,
} from "./registration.styled";
import { Box, Grid } from "@mui/material";
import { default as textwrap } from "../../assets/text-file/textwrap.json";
// import { useGoogleLogin } from "@react-oauth/google";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";

const Registration = () => {
  const { isMobile, isDesktop } = useMediaQuery();
  // const Login = useGoogleLogin({
  //   onSuccess: (tokenResponse: any) => console.log(tokenResponse),
  // });
  const navigate = useNavigate();
  const navLogin = () => {
    navigate("/login");
  };
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profile: "",
    password: "",
  });
  var confirm_password = "";
  const handleChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleChange1 = (event: any) => {
    confirm_password = event.target.value;
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
            <Grid
              item
              xs={11}
              sm={10}
              md={10}
              lg={11}
              sx={{ pl: isDesktop ? 10 : 4, pt: isMobile ? 15 : 55.9 }}
            >
              <TextWrap5>{textwrap.description}</TextWrap5>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ pl: isDesktop ? 10 : 4 }}
            >
              <TextWrap6>{textwrap.author}</TextWrap6>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                pl: isDesktop ? 10 : 4,
                mt: isMobile ? -3 : -5,
                pb: isMobile ? 3 : 8,
              }}
            >
              <TextWrap7>{textwrap.authorCategory}</TextWrap7>
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
                <TextWrap1>{textwrap.createAccount}</TextWrap1>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextWrap2>{textwrap.accountDescription}</TextWrap2>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: 4 }}>
                <Input
                  type="text"
                  name="name"
                  onBlur={handleChange}
                  defaultValue={userInfo.name}
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
                  defaultValue={userInfo.email}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="url"
                  name="profile"
                  onBlur={handleChange}
                  defaultValue={userInfo.profile}
                  placeholder="Add Profile Picture"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="password"
                  id="pass10"
                  name="password"
                  onBlur={handleChange}
                  defaultValue={userInfo.password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder="password"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  type="password"
                  id="pass20"
                  name="confirm_password"
                  onBlur={handleChange1}
                  defaultValue={confirm_password}
                  placeholder="Confirm password"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CreateAccountButton>
                  {textwrap.createAccountButton}
                </CreateAccountButton>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <SignGoogleButton onClick={() => Login()}>
                  <GoogleLogo1 src={GoogleLogo} />
                  {textwrap.googleSignUp}
                </SignGoogleButton> */}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextWrap3>
                  {textwrap.alreadyHas}
                  <LoginLink onClick={navLogin}>{textwrap.loginLink}</LoginLink>
                </TextWrap3>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default Registration;
