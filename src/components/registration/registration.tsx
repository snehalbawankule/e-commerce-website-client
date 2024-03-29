import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import {
  Box,
  Grid,
  Divider,
  Checkbox,
  FormControlLabel,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import {
  Input,
  SignGoogleButton,
  LoginLink,
  GoogleLogo1,
  TextWrap3,
  TextWrap1,
} from "./registration.styled";
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
  const navLogin = () => {
    navigate("/login");
  };
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
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
    if (userInfo.password === confirm_password) {
      axios
        .post("http://localhost:3001/postuser", {
          firstname: userInfo.firstname,
          lastname: userInfo.lastname,
          email: userInfo.email,
          password: userInfo.password,
        })
        .then(() => {
          navLogin();
        });
    } else {
      alert("Passwords Don't Match");
    }
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
            {textwrap.continueWithGoogle}
          </SignGoogleButton>

          <SignGoogleButton>
            <GoogleLogo1 src={FacebookLogo} />
            {textwrap.continueWithFacebook}
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
              name="firstname"
              onBlur={handleChange}
              defaultValue={userInfo.firstname}
              minLength={5}
              maxLength={10}
              placeholder="Full Name"
              required
            />
            <Input
              style={{ marginTop: 30 }}
              type="text"
              name="lastname"
              onBlur={handleChange}
              defaultValue={userInfo.lastname}
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
                  {textwrap["registrationTerms&Conditions"]}
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
