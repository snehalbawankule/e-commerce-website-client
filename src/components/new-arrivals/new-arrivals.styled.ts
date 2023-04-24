import styled from "styled-components";
type LatestArticleProps = {
  src?: string;
};
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap02 = styled.div`
  font-weight: 700;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(27.61)};
  color: #2f2e41;
  @media (max-width: 767px) {
    font-size: ${pxToRem(22)};
  }
`;

const TextWrap03 = styled.div`
  font-weight: 300;
  color: #000000;
  padding-top: ${pxToRem(24)};
  font-size: ${pxToRem(20)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;
const TextWrap01 = styled.div`
  padding-top: ${pxToRem(24)};
  font-weight: 300;
  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;

const ImageWrap = styled.img<LatestArticleProps>`
  height: ${pxToRem(320)};
  width: ${pxToRem(320)};
  backgroundimage: url(${(props: any) => props.src});
  backgroundposition: "center";
  backgroundsize: "cover";
`;

export { TextWrap02, TextWrap03, TextWrap01, ImageWrap };
