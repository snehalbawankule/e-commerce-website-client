import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
type BrandProps = {
  src?: string;
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
const ImageBox = styled.img<BrandProps>`
  height: ${pxToRem(160)};
  width: ${pxToRem(160)};
  background-image: url(${(props: any) => props.src});
  background-position: top;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  border-radius: ${pxToRem(16)};

  @media (max-width: 767px) {
    height: ${pxToRem(130)};
    width: ${pxToRem(120)};
  }
`;

export { BrandName, ImageBox };
