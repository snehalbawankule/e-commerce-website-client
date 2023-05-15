import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./index.css";
import { TextWrap03 } from "./size.styled";
interface ChildComponentProps {
  onSendValue: (value: string) => void;
}

const Size: React.FC<ChildComponentProps> = ({ onSendValue }) => {
  const size = ["XS", "S", "M", "L", "XL", "2XL"];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size: any) => {
    setSelectedSize(size);
    onSendValue(size);
  };
  return (
    <>
      <TextWrap03>Size</TextWrap03>
      <Grid
        container
        style={{ marginTop: 15, display: "flex", alignItems: "center" }}
      >
        {size.map((size: any, index) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? "selected" : ""}`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </Grid>
    </>
  );
};

export default Size;
