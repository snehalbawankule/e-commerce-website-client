import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  Box,
  Grid,
  Divider,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
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
    axios
      .post("http://localhost:3001/validate-user", {
        email,
        password,
      })
      .then(function (response) {
        if (response.data.message === "User not found") {
          alert(response.data.message);
        } else if (response.data.message === "Invalid password") {
          alert(response.data.message);
        } else {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navRegistration = () => {
    navigate("/registration");
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle>
        <Grid container>
          <Grid item sm={11}>
            <TextWrap1>{textwrap.signIn}</TextWrap1>
          </Grid>
          <Grid item sm={1}>
            <CloseIcon style={{ paddingLeft: 30 }} onClick={handleClose}>
              {textwrap.cancel}
            </CloseIcon>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Box>
          <SignGoogleButton>
            <GoogleLogo1 src={GoogleLogo} />
            {textwrap.continueWithGoogle}
          </SignGoogleButton>

          <SignGoogleButton>
            <GoogleLogo1 src={FacebookLogo} />
            {textwrap.continueWithFacebook}
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
