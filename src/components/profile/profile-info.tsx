import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { actions } from "../../store/user/slice";
import { EditButton, ProfileInfoTitle, SaveButton } from "./profile.styled";
import { useAppDispatch } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";
import { getUser } from "../../store/selectors";
import { useSelector } from "react-redux";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

const ProfileInfo = () => {
  const dispatch = useAppDispatch();

  const currentUser = useSelector(getUser);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  // const currentUser = User;
  const [userInfo, setUserInfo] = useState({
    id: currentUser.id,
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    email: currentUser.email,
  });

  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleUserInfoChange = (event: any) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    if (validateEmail(userInfo.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const [editMode, setEditMode] = useState(false);
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actions.userUpdate(userInfo));
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
        <ProfileInfoTitle>{textwrap.profileInfo}</ProfileInfoTitle>
        <EditButton onClick={handleEditClick}>
          {editMode ? <>{textwrap.cancel}</> : <>{textwrap.edit}</>}
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
            <SaveButton>{textwrap.save}</SaveButton>
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
    </Grid>
  );
};
export default ProfileInfo;
