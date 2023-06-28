import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { EditButton } from "../profile/profile.styled";
import { useAppSelector } from "../../hooks/hooks";
import { AddressType, TextWrap01 } from "./address.styled";
import AddressEditModal from "./edit-address";

function AddressList() {
  const currentUser = useAppSelector((state) => state.user.user);
  const addressed = currentUser.user_addresses;

  const [addresses, setAddresses] = useState(addressed);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleEditAddress = (address: any) => {
    setEditingAddress(address);
  };

  const handleSaveAddress = (updatedAddress: any) => {
    setAddresses(updatedAddress);

    setEditingAddress(null);
  };

  const handleCancelEdit = () => {
    setEditingAddress(null);
  };

  return (
    <Grid container style={{ paddingLeft: 330 }}>
      <Box>
        <Grid container>
          {addressed.map((address: any) => {
            return (
              <Grid item xs={11} sm={11} md={10} lg={10} key={address.id}>
                {editingAddress === address ? (
                  <AddressEditModal
                    address={editingAddress}
                    onSave={handleSaveAddress}
                    onCancel={handleCancelEdit}
                  />
                ) : (
                  <>
                    <Box sx={{ p: 1, marginTop: 2, border: "1px solid black" }}>
                      <Grid item xs={11} sm={11} md={12} lg={12} display="flex">
                        <Grid item xs={11} sm={11} md={11} lg={11}>
                          <AddressType>{address.address_type}</AddressType>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          sm={1}
                          md={2}
                          lg={2}
                          display="flex"
                          justifyContent="end"
                        >
                          <EditButton
                            onClick={() => handleEditAddress(address)}
                          >
                            Edit
                          </EditButton>
                        </Grid>
                      </Grid>
                      <TextWrap01 style={{ fontWeight: 500 }}>
                        {address.name}
                        {"       "} {address.mobile}
                      </TextWrap01>
                      <TextWrap01>
                        {address.address_line1}, {address.address_line2},{" "}
                        {address.city},
                      </TextWrap01>
                      <TextWrap01>
                        {address.state}, {address.country}, -{" "}
                        {address.postal_code}{" "}
                      </TextWrap01>
                    </Box>
                  </>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}

export default AddressList;
