import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;

const TextWrap01 = styled.div`
  font-weight: 700;
  font-size: ${pxToRem(30)};
  color: black;
`;

export { TextWrap01 };
