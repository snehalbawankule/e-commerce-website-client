import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { TextWrap02 } from "../user-address/address.styled";
import { default as textwrap } from "../../assets/text-file/textwrap.json";

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
    <Grid container style={{ marginTop: 40 }}>
      <Box>
        <TextWrap02>{textwrap.paymentMethodTitle}</TextWrap02>
        <Grid container direction="column">
          {pages.map((page: any, index: any) => {
            return (
              <Box sx={{ p: 1, marginTop: 2 }} key={index}>
                <Grid item xs={11} sm={11} md={12} lg={12} display="flex">
                  <label>
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
