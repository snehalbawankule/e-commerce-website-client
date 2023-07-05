import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap01 = styled.div`
  font-weight: 300;
  padding-top: ${pxToRem(5)};
  font-size: ${pxToRem(16)};
  color: black;
`;
const AddressType = styled.button`
  font-size: ${pxToRem(16)};
  border: none;
  color: gray;
`;
const TextWrap02 = styled.div`
  font-weight: 500;
  padding-top: ${pxToRem(5)};
  font-size: ${pxToRem(20)};
  color: #c45500;
`;
export { TextWrap01, AddressType, TextWrap02 };
