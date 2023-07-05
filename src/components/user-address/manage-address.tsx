import React from "react";
import NewAddress from "./new-address";
import AddressList from "./address-list";
import { Grid } from "@mui/material";

const ManageAddress = () => {
  return (
    <Grid container style={{ paddingLeft: 330 }}>
      <NewAddress />
      <AddressList />
    </Grid>
  );
};
export default ManageAddress;
