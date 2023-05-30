import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { actions } from "../../store/user/slice";
import {
  EditButton,
  Input,
  ProfileInfoTitle,
  SaveButton,
} from "./profile.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";

const ProfileInfo = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.user.user);

  const [userInfo, setUserInfo] = useState({
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    email: currentUser.email,
  });
  const [userAddressInfo, setUserAddressInfo] = useState({
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
    mobile: "",
  });

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleUserInfoChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    if (validateEmail(userInfo.email)) {
      setValidEmail(true);

      console.log("Valid email:", userInfo.email);
    } else {
      setValidEmail(false);
    }
  };
  const handleUserAddressChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const [editMode, setEditMode] = useState(false);
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const updatedUser = {
      id: currentUser.id,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
    };
    dispatch(actions.userUpdate(updatedUser));
  };

  return (
    <Grid
      container
      style={{ paddingTop: 100, marginLeft: 330 }}
      direction="column"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        style={{ display: "flex", paddingBottom: 20 }}
      >
        <ProfileInfoTitle>Personal Information</ProfileInfoTitle>
        <EditButton onClick={handleEditClick}>
          {editMode ? <>Cancel</> : <>Edit</>}
        </EditButton>
      </Grid>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {editMode ? (
          <>
            <TextField
              name="firstname"
              defaultValue={userInfo.firstname}
              onChange={handleUserInfoChange}
              required
              label="FirstName"
              InputProps={{
                inputProps: {
                  minLength: 5,
                  maxLength: 10,
                },
              }}
              style={{ marginLeft: 10 }}
            />

            <TextField
              name="lastname"
              defaultValue={userInfo.lastname}
              onChange={handleUserInfoChange}
              required
              label="LastName"
              InputProps={{
                inputProps: {
                  minLength: 5,
                  maxLength: 10,
                },
              }}
              style={{ marginLeft: 20 }}
            />
            <TextField
              name="email"
              defaultValue={userInfo.email}
              onChange={handleUserInfoChange}
              required
              label="Email"
              error={!validEmail}
              helperText={!validEmail && "Invalid email address"}
              style={{ marginLeft: 20 }}
            />
            <SaveButton>Save</SaveButton>
          </>
        ) : (
          <>
            <TextField
              name="firstname"
              defaultValue={userInfo.firstname}
              disabled
              label="FirstName"
              style={{ marginLeft: 10 }}
            />
            <TextField
              name="lastname"
              defaultValue={userInfo.lastname}
              disabled
              label="LastName"
              style={{ marginLeft: 20 }}
            />
            <TextField
              name="email"
              defaultValue={userInfo.email}
              disabled
              label="Email"
              style={{ marginLeft: 20 }}
            />
          </>
        )}
      </form>
      <ProfileInfoTitle>Manage Addresses</ProfileInfoTitle>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          style={{ marginTop: 20 }}
          type="text"
          name="address_line1"
          onBlur={handleUserAddressChange}
          defaultValue={userAddressInfo.address_line1}
          minLength={5}
          maxLength={10}
          placeholder="address line 1"
          required
        />

        <Input
          type="text"
          name="address_line2"
          onBlur={handleUserAddressChange}
          defaultValue={userAddressInfo.address_line2}
          minLength={5}
          maxLength={10}
          placeholder="address line 2"
          required
        />

        <Input
          type="text"
          name="city"
          placeholder="city"
          defaultValue={userAddressInfo.city}
          onBlur={handleUserAddressChange}
          required
        />
      </form>

      {/* <Grid item>
        <PostButton>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to={`/login`}
          >
            LogOut
          </Link>
        </PostButton>
      </Grid> */}
    </Grid>
  );
};
export default ProfileInfo;
