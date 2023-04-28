import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type BrandProps = {
  background?: string;
};

const BrandName = styled.img<BrandProps>`
background-image:  url(${(props: any) => props.src});
background-position: "center";
background-size: "cover";
transform: hovered ? "scale(1.1)" : "scale(1)";
transition: "all 0.2s ease-in-out";
border:none;
  height: "150px";
  width: "150px";
  background-color: "#6DB3F2";
  background-position: "top";
  border-radius: "16px";


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
