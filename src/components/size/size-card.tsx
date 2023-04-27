import React from "react";
import { Box } from "@mui/material";
import { TextWrap02 } from "./size.styled";
import { useNavigate } from "react-router-dom";

const SizeCard = (props: any) => {
  const { post } = props;
  const { id } = post;

  let history = useNavigate();

  return (
    <Box
      onClick={() => history(`/products/${id}`)}
      sx={{
        width: 50,
        height: 33,
        marginRight: 1,
        border: "1px solid grey",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextWrap02 style={{ paddingTop: 0, fontSize: 22, fontWeight: 300 }}>
        {post}
      </TextWrap02>
    </Box>
  );
};

export default SizeCard;
