import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const CategoryName = styled.div`
  font-weight: 700;
  fontsize: ${pxToRem(26)};
  color: black;
  text-transform: capitalize;
  padding-bottom: ${pxToRem(10)};
`;

export { CategoryName };
