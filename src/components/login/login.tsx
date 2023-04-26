// import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import { Box, Grid, Divider } from "@mui/material";
// import axios from "axios";
import {
  Input,
  SignGoogleButton,
  LoginLink,
  GoogleLogo1,
  TextWrap3,
  TextWrap1,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
  TextWrap2,
} from "../registration/registration.styled";
import { Forget, LoginButton } from "./login.styled";
import { default as textwrap } from "../../assets/text-file/textwrap.json";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";

const Login = () => {
  const { isTablet, isDesktop, isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:3001/checkuser", {
    //     email,
    //     password,
    //   })
    //   .then(function (response) {
    //     if (response.data.message === "User not found") {
    //       alert(response.data.message);
    //     } else if (response.data.message === "Invalid password") {
    //       alert(response.data.message);
    //     } else {
    //       localStorage.setItem("current", JSON.stringify(response.data));
    //       navigate("/home");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const navRegistration = () => {
    navigate("/");
  };
  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse: any) => console.log(tokenResponse),
  // });

  return (
    <Grid container style={{ background: "white" }}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Box
          style={{
            backgroundImage: `url(${Rectangle2})`,
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
            xs={12}
            sm={8}
            md={10}
            lg={10}
            sx={{ pl: isDesktop ? 10 : 4, pt: isMobile ? 15 : 60 }}
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
        display="flex-column"
        style={{
          justifyContent: isDesktop ? "flex" : isTablet ? "center" : "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ pt: isDesktop ? 10 : 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextWrap1>{textwrap.welcome}</TextWrap1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextWrap2>{textwrap.loginDescription}</TextWrap2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ pt: isDesktop ? 5 : 1 }}
          >
            <SignGoogleButton>
              <GoogleLogo1 src={GoogleLogo} />
              {textwrap.googleSignIn}
            </SignGoogleButton>
          </Grid>
          <Divider style={{ marginTop: 65 }}>OR</Divider>

          <form>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ marginTop: isMobile ? 5 : 15 }}
            >
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                defaultValue={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: 5 }}>
              <Input
                style={{ marginBottom: 0 }}
                type="password"
                name="password"
                onChange={(e: any) => setPassword(e.target.value)}
                defaultValue={password}
                placeholder="Password"
                required
              />
            </Grid>
            <Forget>{textwrap.forgotPassword}</Forget>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <LoginButton
                onClick={(e: any) => {
                  handleSubmit(e);
                }}
              >
                {textwrap.loginButton}
              </LoginButton>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextWrap3>
                {textwrap.notRegisterd}
                <LoginLink onClick={navRegistration}>
                  {textwrap.registerLink}
                </LoginLink>
              </TextWrap3>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;
