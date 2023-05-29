import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Input, ProfileInfoTitle } from "./profile.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";
import axios from "axios";

const ProfileInfo = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.user.user);
  console.log(currentUser.firstname);
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
  console.log(userInfo);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const handleUserInfoChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleUserAddressChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const [editMode, setEditMode] = useState(false);
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    //   axios
    //     .post("http://localhost:3001/postuser", {
    //       firstname: userInfo.firstname,
    //       lastname: userInfo.lastname,
    //       email: userInfo.email,
    //       password: userInfo.mobile,
    //     })
    //     .then(() => {
    //       alert("User info updated successfully");
    //     });
  };

  return (
    <Grid
      container
      style={{ paddingTop: 100, marginLeft: 330 }}
      direction="column"
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <ProfileInfoTitle>Personal Information</ProfileInfoTitle>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <button onClick={handleEditClick}>Edit</button>
        </Grid>
        {editMode ? (
          <Input
            style={{ marginTop: 30 }}
            type="text"
            name="firstname"
            onBlur={handleUserInfoChange}
            defaultValue={userInfo.firstname}
            minLength={5}
            maxLength={10}
            placeholder="First Name"
            required
          />
        ) : (
          <input
            style={{ marginTop: 30 }}
            type="text"
            name="firstname"
            defaultValue={userInfo.firstname}
            disabled
          />
        )}

        <Input
          type="text"
          name="lastname"
          onBlur={handleUserInfoChange}
          defaultValue={userInfo.lastname}
          minLength={5}
          maxLength={10}
          placeholder="Last Name"
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          defaultValue={userInfo.email}
          onBlur={handleUserInfoChange}
          required
        />
      </form>
      <ProfileInfoTitle>Manage Addresses</ProfileInfoTitle>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          style={{ marginTop: 30 }}
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
