import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const PostButton = styled.button`
  background: #2f2e41;
  height: ${pxToRem(22)};
  border-radius: 7.24416px;

  font-weight: 300;
  font-size: ${pxToRem(7)};
  @media (min-width: 768px) {
    font-size: ${pxToRem(12)};
    height: ${pxToRem(30)};
  }
  @media (min-width: 1024px) {
    font-size: ${pxToRem(15)};
    height: ${pxToRem(42)};
  }
`;
const TextWrap4 = styled.h4`
  font-size: ${pxToRem(24)};
  color: #f3f2ff;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: ${pxToRem(12)};
  }
`;
export { PostButton, TextWrap4 };
