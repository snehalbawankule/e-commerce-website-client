import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type BrandProps = {
  background?: string;
};

const BrandName = styled.img<BrandProps>`
height: "51px",
width: "76px",
background-image:  url(${(props: any) => props.src});
background-position: "center",
background-size: "cover",
transform: hovered ? "scale(1.1)" : "scale(1)",
transition: "all 0.2s ease-in-out",
border:none
`;
const TextWrap4 = styled.h1`
  font-size: ${pxToRem(24)};
  color: #f3f2ff;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: ${pxToRem(12)};
  }
`;
export { BrandName, TextWrap4 };
