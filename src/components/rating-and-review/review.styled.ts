import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const CommentsBox = styled.div`
  overflow-y: scroll;
  height: ${pxToRem(650)};
  width: ${pxToRem(330)};
  @media (min-width: 768px) {
    height: ${pxToRem(280)};
    width: ${pxToRem(900)};
  }
`;
const Input = styled.input`
  font-weight: 300;
  width: ${pxToRem(250)};
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-top: ${pxToRem(10)};
  @media (min-width: 768px) {
    width: ${pxToRem(530)};
  }
  @media (min-width: 1024px) {
    width: ${pxToRem(780)};
  }
`;
const TextWrap04 = styled.div`
  font-weight: 300;

  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;
export { CommentsBox, Input, TextWrap04 };
