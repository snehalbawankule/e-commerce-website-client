import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { EditButton } from "../profile/profile.styled";
import { useAppSelector } from "../../hooks/hooks";
import {
  AddressType,
  TextWrap01,
  TextWrap02,
} from "../user-address/address.styled";
import { Link } from "react-router-dom";

function PaymentOptions() {
  const pages = [
    "Credit or debit card",
    "Net Banking",
    "UPI",
    "EMI",
    "Cash on Delivery/Pay on Delivery",
  ];

  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <Grid container>
      <Box>
        <TextWrap02>2 Select a payment method</TextWrap02>
        <Grid container direction="column">
          {pages.map((page: any, index: any) => {
            return (
              <Box sx={{ p: 1, marginTop: 2 }}>
                <Grid item xs={11} sm={11} md={12} lg={12} display="flex">
                  <label key={index}>
                    <input
                      type="radio"
                      value={index}
                      checked={selectedValue === index}
                      onChange={() => setSelectedValue(index)}
                      defaultChecked={selectedValue === index}
                    />
                    {page}
                  </label>
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}

export default PaymentOptions;
