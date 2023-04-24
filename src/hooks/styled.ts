import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap = styled.div`
  font-weight: 700;
  font-size: ${pxToRem(24)};
  color: #2f2e41;
  display: contents;
  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }
`;

export { TextWrap };
