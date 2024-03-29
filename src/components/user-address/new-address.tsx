import { useEffect, useState } from "react";
import { actions } from "../../store/user/slice";
import {
  EditButton,
  ProfileInfoTitle,
  SaveButton,
} from "../profile/profile.styled";
import { useAppDispatch } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";
import {
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { getUser } from "../../store/selectors";
import { useSelector } from "react-redux";

const NewAddress = () => {
  const dispatch = useAppDispatch();

  const currentUser = useSelector(getUser);
  const id = currentUser.id;
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const [userAddressInfo, setUserAddressInfo]: any = useState({
    userId: id,
    name: "",
    mobile: "",
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
    alternative_mobile: "",
    address_type: "Home",
  });

  const handleUserAddressChange = (event: any) => {
    setUserAddressInfo({
      ...userAddressInfo,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actions.addNewAddress(userAddressInfo));
    setEditMode(false);
  };

  const [editMode, setEditMode] = useState(false);

  return (
    <Grid container style={{ marginTop: 100 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", paddingBottom: 10 }}
      >
        <ProfileInfoTitle>Manage address</ProfileInfoTitle>
      </Grid>
      <EditButton
        style={{ marginLeft: 10 }}
        onClick={() => setEditMode(!editMode)}
      >
        Add new address
      </EditButton>
      {editMode ? (
        <>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Grid container style={{ marginTop: 20, paddingLeft: 10 }}>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <TextField
                  name="name"
                  defaultValue={userAddressInfo.name}
                  onBlur={handleUserAddressChange}
                  required
                  label="Name"
                  InputProps={{
                    inputProps: {
                      minLength: 5,
                      maxLength: 20,
                    },
                  }}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <TextField
                  name="mobile"
                  defaultValue={userAddressInfo.mobile}
                  onBlur={handleUserAddressChange}
                  required
                  InputProps={{
                    inputProps: {
                      minLength: 10,
                      maxLength: 10,
                    },
                  }}
                  fullWidth={true}
                  label="Mobile"
                  style={{ marginLeft: 20 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="address_line1"
                  defaultValue={userAddressInfo.address_line1}
                  onBlur={handleUserAddressChange}
                  required
                  label="Address Line 1"
                  InputProps={{
                    inputProps: {
                      minLength: 10,
                      maxLength: 40,
                    },
                  }}
                  fullWidth={true}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="address_line2"
                  defaultValue={userAddressInfo.address_line2}
                  onBlur={handleUserAddressChange}
                  label="Address Line 2"
                  InputProps={{
                    inputProps: {
                      minLength: 10,
                      maxLength: 40,
                    },
                  }}
                  fullWidth={true}
                  style={{ marginLeft: 20 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="city"
                  defaultValue={userAddressInfo.city}
                  onBlur={handleUserAddressChange}
                  required
                  label="city"
                  InputProps={{
                    inputProps: {
                      minLength: 4,
                      maxLength: 20,
                    },
                  }}
                  fullWidth={true}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="postal_code"
                  defaultValue={userAddressInfo.postal_code}
                  onBlur={handleUserAddressChange}
                  required
                  label="Postal Code"
                  InputProps={{
                    inputProps: {
                      minLength: 6,
                      maxLength: 6,
                    },
                  }}
                  fullWidth={true}
                  style={{ marginLeft: 20 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3.9}
                lg={3.9}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="state"
                  defaultValue={userAddressInfo.state}
                  onBlur={handleUserAddressChange}
                  required
                  label="State"
                  fullWidth={true}
                  style={{ marginLeft: 30 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="country"
                  defaultValue={userAddressInfo.country}
                  onBlur={handleUserAddressChange}
                  required
                  label="Country"
                  fullWidth={true}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                style={{ marginTop: 20 }}
              >
                <TextField
                  name="alternative_mobile"
                  defaultValue={userAddressInfo.alternative_mobile}
                  onBlur={handleUserAddressChange}
                  label="Alternate Mobile"
                  InputProps={{
                    inputProps: {
                      minLength: 10,
                      maxLength: 10,
                    },
                  }}
                  fullWidth={true}
                  style={{ marginLeft: 20 }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginTop: 20, marginLeft: 10 }}
              >
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Address type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    defaultChecked={userAddressInfo.address_type}
                    onBlur={handleUserAddressChange}
                    row
                  >
                    <FormControlLabel
                      value="home"
                      control={<Radio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="work"
                      control={<Radio />}
                      label="Work"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                style={{ marginTop: 20 }}
              >
                <SaveButton
                  style={{ paddingLeft: 90, paddingRight: 90, marginLeft: 0 }}
                >
                  Save
                </SaveButton>
              </Grid>
              <EditButton
                style={{ alignItems: "center", fontSize: 20, paddingTop: 20 }}
                onClick={() => setEditMode(false)}
              >
                Cancel
              </EditButton>
            </Grid>
          </form>
        </>
      ) : null}
    </Grid>
  );
};
export default NewAddress;
