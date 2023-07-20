import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { EditButton } from "../profile/profile.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { AddressType, TextWrap02 } from "./address.styled";
import AddressEditModal from "./edit-address";
import { getCurrentUser } from "../../store/user/services";
import CartSubTotal from "../cart/cart-subtotal";

function AddressList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const currentUser = useAppSelector((state) => state.user.user);

  const addressed = currentUser.user_addresses;

  const [addresses, setAddresses] = useState(addressed);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleEditAddress = (address: any) => {
    setEditingAddress(address);
  };

  const handleSaveAddress = (index: any) => {
    setSelectedValue(index);
    const selectedAddress = addresses[index];
    const shipping_address = `${selectedAddress.name} ${selectedAddress.address_line1}, ${selectedAddress.address_line2}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}, - ${selectedAddress.postal_code}, Phone Number:${selectedAddress.mobile}`;
    console.log(shipping_address);

    const storedDataAsString = sessionStorage.getItem("shipping_address");
    let storedData = {};

    if (storedDataAsString) {
      // If the shipping address exists, parse it from JSON
      storedData = JSON.parse(storedDataAsString);
    }

    // Update the storedData with the new shippingAddress data
    storedData = { ...storedData, shipping_address };

    // Convert the updated data back to a JSON string
    const dataAsString = JSON.stringify(storedData);

    // Save the updated data back to sessionStorage
    sessionStorage.setItem("shipping_address", dataAsString);
    setEditingAddress(null);
  };

  const handleCancelEdit = () => {
    setEditingAddress(null);
  };

  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <Grid container>
      <Box>
        <Grid container>
          <TextWrap02>1. Select a delivery address</TextWrap02>
          {addressed.map((address: any, index: any) => {
            return (
              <Grid item xs={12} sm={11} md={11} lg={11} key={address.id}>
                {editingAddress === address ? (
                  <AddressEditModal
                    address={editingAddress}
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
                            Edit{" "}
                          </EditButton>
                        </Grid>
                      </Grid>

                      <label key={index}>
                        <input
                          type="radio"
                          value={index}
                          checked={selectedValue === index}
                          onChange={() => handleSaveAddress(index)}
                          defaultChecked={selectedValue === index}
                        />
                        {address.name}
                        {address.address_line1}, {address.address_line2},{" "}
                        {address.city}, {address.state}, {address.country}, -{" "}
                        {address.postal_code}, Phone Number:{address.mobile}
                      </label>
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
