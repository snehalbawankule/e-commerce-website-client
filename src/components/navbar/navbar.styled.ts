import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const PostButton = styled.button`
  background: black;
  height: ${pxToRem(30)};
  border-radius: 7.24416px;
  color: white;
  font-weight: 300;
  font-size: ${pxToRem(12)};
  @media (min-width: 1024px) {
    font-size: ${pxToRem(15)};
    height: ${pxToRem(42)};
  }
`;
const TextWrap4 = styled.div`
  font-size: ${pxToRem(24)};
  color: black;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: ${pxToRem(16)};
  }
`;

export { PostButton, TextWrap4 };
