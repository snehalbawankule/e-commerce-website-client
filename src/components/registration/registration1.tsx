import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
// import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import { Box, Grid, Divider } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
// import axios from "axios";
import Checkbox from "@mui/material/Checkbox";

import {
  Input,
  SignGoogleButton,
  LoginLink,
  GoogleLogo1,
  TextWrap3,
  TextWrap1,
} from "../registration/registration.styled";
import { LoginButton } from "../login/login.styled";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
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
  };

  const navLogin = () => {
    navigate("/login");
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>
        <Grid container>
          <Grid item sm={11}>
            <TextWrap1>Sign up</TextWrap1>
          </Grid>
          <Grid item sm={1}>
            <CloseIcon style={{ paddingLeft: 30 }} onClick={handleClose} />
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Box>
          <SignGoogleButton>
            <GoogleLogo1 src={GoogleLogo} />
            Continue with Google
          </SignGoogleButton>

          <SignGoogleButton>
            <GoogleLogo1 src={FacebookLogo} />
            Continue with Facebook
          </SignGoogleButton>

          <Divider style={{ marginTop: 65 }}>OR</Divider>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Input
              style={{ marginTop: 30 }}
              type="text"
              name="name"
              onBlur={handleChange}
              defaultValue={userInfo.name}
              minLength={5}
              maxLength={10}
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              defaultValue={userInfo.email}
              onBlur={handleChange}
              required
            />

            <Input
              type="password"
              name="password"
              onBlur={handleChange}
              defaultValue={userInfo.password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              placeholder="password"
              required
            />
            <Input
              style={{ marginBottom: 10 }}
              type="password"
              name="password1"
              onBlur={handleChange1}
              defaultValue={confirm_password}
              placeholder="Confirm Password"
              required
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sign up for news about our sales and new arrivals"
            />

            <DialogActions style={{ justifyContent: "center" }}>
              <Box>
                <LoginButton>{textwrap.createAccountButton}</LoginButton>

                <TextWrap3>
                  {textwrap.alreadyHas}
                  <LoginLink onClick={navLogin}>{textwrap.loginLink}</LoginLink>
                </TextWrap3>
                <TextWrap3>
                  By signing up, you agree to our Privacy Policy and Terms of
                  Service.
                </TextWrap3>
              </Box>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default Registration;
