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
// import axios from "axios";
import {
  Input,
  SignGoogleButton,
  LoginLink,
  GoogleLogo1,
  TextWrap3,
  TextWrap1,
} from "../registration/registration.styled";
import { Forget, LoginButton } from "./login.styled";
import { default as textwrap } from "../../assets/text-file/textwrap.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const navRegistration = () => {
    navigate("/registration");
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle>
        <Grid container>
          <Grid item sm={11}>
            <TextWrap1>Sign in</TextWrap1>
          </Grid>
          <Grid item sm={1}>
            <CloseIcon style={{ paddingLeft: 30 }} onClick={handleClose}>
              Cancel
            </CloseIcon>
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

          <Input
            style={{ marginTop: 20 }}
            type="email"
            name="email"
            placeholder="Email Address"
            defaultValue={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />

          <Input
            style={{ marginBottom: 0 }}
            type="password"
            name="password"
            onChange={(e: any) => setPassword(e.target.value)}
            defaultValue={password}
            placeholder="Password"
            required
          />

          <Forget>{textwrap.forgotPassword}</Forget>
          <DialogActions style={{ justifyContent: "center" }}>
            <Box>
              <LoginButton
                onClick={(e: any) => {
                  handleSubmit(e);
                }}
              >
                {textwrap.loginButton}
              </LoginButton>

              <TextWrap3>
                {textwrap.notRegisterd}
                <LoginLink onClick={navRegistration}>
                  {textwrap.registerLink}
                </LoginLink>
              </TextWrap3>
            </Box>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default Login;
