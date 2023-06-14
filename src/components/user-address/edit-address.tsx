import React, { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { actions } from "../../store/user/slice";
import { EditButton, SaveButton } from "../profile/profile.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCurrentUser } from "../../store/user/services";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AddressType, TextWrap01 } from "./address.styled";

const AddressEditModal = ({ address, onSave, onCancel }: any) => {
  const [userAddressInfo, setUserAddressInfo]: any = useState({
    name: address.name,
    mobile: address.mobile,
    address_line1: address.address_line1,
    address_line2: address.address_line2,
    city: address.city,
    postal_code: address.postal_code,
    state: address.state,
    country: address.country,
    alternative_mobile: address.alternative_mobile,
    address_type: address.address_type,
  });
  const dispatch = useAppDispatch();
  const handleUserAddressChange = (event: any) => {
    setUserAddressInfo({
      ...userAddressInfo,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    const updatedAddress = {
      id: address.id,
      userId: address.userId,
      name: userAddressInfo.name,
      mobile: userAddressInfo.mobile,
      address_line1: userAddressInfo.address_line1,
      address_line2: userAddressInfo.address_line2,
      city: userAddressInfo.city,
      postal_code: userAddressInfo.postal_code,
      state: userAddressInfo.state,
      country: userAddressInfo.country,
      alternative_mobile: userAddressInfo.alternative_mobile,
      address_type: userAddressInfo.address_type,
    };
    console.log(updatedAddress);
    dispatch(
      actions.updateAddress({
        id: address.id,
        userId: address.userId,
        name: userAddressInfo.name,
        mobile: userAddressInfo.mobile,
        address_line1: userAddressInfo.address_line1,
        address_line2: userAddressInfo.address_line2,
        city: userAddressInfo.city,
        postal_code: userAddressInfo.postal_code,
        state: userAddressInfo.state,
        country: userAddressInfo.country,
        alternative_mobile: userAddressInfo.alternative_mobile,
        address_type: userAddressInfo.address_type,
      })
    );

    // Pass the updated address to the onSave callback function
    onSave(updatedAddress);
  };

  return (
    <div className="modal">
      <h2>Edit Address</h2>
      <form
      // onSubmit={(e) => {
      //   handleSubmit(e);
      // }}
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
          <Grid item xs={12} sm={12} md={5} lg={5} style={{ marginTop: 20 }}>
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
          <Grid item xs={12} sm={12} md={5} lg={5} style={{ marginTop: 20 }}>
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
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ marginTop: 20 }}>
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
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ marginTop: 20 }}>
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
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ marginTop: 20 }}>
            <TextField
              name="country"
              defaultValue={userAddressInfo.country}
              onBlur={handleUserAddressChange}
              required
              label="Country"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} style={{ marginTop: 20 }}>
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
            {/* <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Address type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="address-type"
                value={userAddressInfo.address_type}
                defaultChecked={userAddressInfo.address_type}
                onChange={handleUserAddressChange}
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
            </FormControl> */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Address type</FormLabel>
              <RadioGroup
                aria-label="address_type"
                name="address_type"
                value={userAddressInfo.address_type}
                onChange={handleUserAddressChange}
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
          <Grid item xs={12} sm={12} md={4} lg={4} style={{ marginTop: 20 }}>
            <SaveButton
              style={{
                paddingLeft: 90,
                paddingRight: 90,
                marginLeft: 0,
              }}
              onClick={handleSave}
            >
              Save
            </SaveButton>
          </Grid>
          <EditButton
            style={{
              alignItems: "center",
              fontSize: 20,
              paddingTop: 20,
            }}
            // onClick={() => setEditMode(false)}
          >
            Cancel
          </EditButton>
        </Grid>
      </form>
    </div>
  );
};
export default AddressEditModal;
