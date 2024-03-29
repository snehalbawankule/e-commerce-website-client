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
const LoadMoreButton = styled.button`
  height: ${pxToRem(65)};
  background: #2f2e41;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  color: #f3f2ff;

  border-radius: ${pxToRem(10)};
  padding-left: ${pxToRem(40)};
  padding-right: ${pxToRem(40)};
  @media (min-width: 1024px) {
    font-size: ${pxToRem(32)};
    height: ${pxToRem(85)};
    margin-top: ${pxToRem(20)};
    padding-left: ${pxToRem(103)};
    padding-right: ${pxToRem(103)};
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
const ProductName = styled.div`
  font-size: ${pxToRem(16)};
  color: #2f2e41;
  font-weight: 500;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: ${pxToRem(10)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(12)};
  }
`;
const ProductTitle = styled.div`
  font-size: ${pxToRem(12)};
  padding-top: ${pxToRem(6)};
  font-weight: 400;
  color: #2f2e41;
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 767px) {
    width: ${pxToRem(165)};
    overflow: hidden;
  }
`;

const NewArrivalTextWrap = styled.div`
  font-size: ${pxToRem(32)};
  padding-top: ${pxToRem(16)};
  font-weight: 700;
  font-family: cursive;
  color: #2f2e41;
  text-align: center;
  @media (max-width: 767px) {
    font-size: ${pxToRem(18)};
    padding-top: ${pxToRem(0)};
  }
`;

const Scroll = styled.div`
  overflow-x: auto;

  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Scroll1 = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
`;

const ImageBox = styled.img<LatestArticleProps>`
  height: ${pxToRem(280)};
  width: ${pxToRem(210)};
  background-image: url(${(props: any) => props.src});
  background-position: top;
  background-size: cover;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1024px) {
    height: ${pxToRem(270)};
    width: ${pxToRem(180)};
  }
`;
export {
  TextWrap02,
  ImageBox,
  TextWrap03,
  TextWrap01,
  LoadMoreButton,
  ImageWrap,
  ProductTitle,
  ProductName,
  NewArrivalTextWrap,
  Scroll,
  Scroll1,
};
