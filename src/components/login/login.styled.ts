import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const Forget = styled.button`
  font-size: ${pxToRem(20)};
  margin-left: ${pxToRem(170)};
  margin-top: ${pxToRem(15)};
  text-decoration-line: underline;
  border: none;
  background: none;
  @media (max-width: 767px) {
    margin-left: ${pxToRem(80)};
  }
`;
const LoginButton = styled.button`
  height: ${pxToRem(58)};
  font-weight: 400;

  margin-top: ${pxToRem(50)};
  font-size: ${pxToRem(21)};
  @media (max-width: 767px) {
    margin-top: ${pxToRem(5)};
    padding-left: ${pxToRem(90)};
    padding-right: ${pxToRem(90)};
  }
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 9.00744px;
  padding-left: ${pxToRem(130)};
  padding-right: ${pxToRem(130)};
`;
export { Forget, LoginButton };
