import styled from "styled-components";
type RegistrationProps = {
  src?: string;
};
const pxToRem = (size: number) => `${size / 16}rem`;
const TextWrap1 = styled.text`
  font-weight: 500;
  font-size: ${pxToRem(40)};
  color: #2f2e41;
  @media (max-width: 767px) {
    font-size: ${pxToRem(27)};
  }
`;

const Input = styled.input`
  font-weight: 300;
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-bottom: ${pxToRem(56)};
  @media (max-width: 767px) {
    margin-bottom: ${pxToRem(30)};
  }
  @media (min-width: 768px) {
    width: ${pxToRem(300)};
  }
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const LoginLink = styled.button`
  border: none;
  text-decoration-line: underline;
  background: none;
  font-size: ${pxToRem(22)};
`;
const CreateAccountButton = styled.button`
  height: ${pxToRem(58)};

  font-weight: 400;
  margin-top: ${pxToRem(50)};
  font-size: ${pxToRem(21)};
  @media (max-width: 767px) {
    margin-top: ${pxToRem(5)};
  }
  @media (min-width: 1024px) {
    padding-left: ${pxToRem(80)};
    padding-right: ${pxToRem(80)};
  }
  color: #f3f2ff;
  background: #2f2e41;
  border-radius: 9.00744px;
  padding-left: ${pxToRem(40)};
  padding-right: ${pxToRem(40)};
`;
const SignGoogleButton = styled.button`
  height: 58px;
  display: inline-flex;
  backgorund-color: #f1f1f1;
  color: #2f2e41;
  font-weight: 300;
  padding-top: ${pxToRem(15)};
  font-size: 17.9653px;
  margin-top: ${pxToRem(25)};
  padding-left: ${pxToRem(12)};
  padding-right: ${pxToRem(12)};
  border: 1.79653px solid rgba(47, 46, 65, 0.15);
  border-radius: ${pxToRem(9)};
  @media (min-width: 1024px) {
    padding-left: ${pxToRem(50)};
    padding-right: ${pxToRem(50)};
  }
`;
const TextWrap3 = styled.h4`
  font-weight: 300;
  font-size: ${pxToRem(18)};
  margin-top: ${pxToRem(50)};
  @media (max-width: 767px) {
    margin-top: ${pxToRem(20)};
  }
  color: #2f2e41;
`;
const TextWrap4 = styled.h4`
  font-size: ${pxToRem(24)};
  color: #f3f2ff;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: ${pxToRem(12)};
  }
`;
const TextWrap5 = styled.h4`
  font-size: ${pxToRem(48)};
  color: #f3f2ff;
  @media (max-width: 767px) {
    font-size: ${pxToRem(24)};
  }
`;

const TextWrap6 = styled.h4`
  font-size: ${pxToRem(40)};
  color: #f3f2ff;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: ${pxToRem(20)};
  }
`;

const TextWrap7 = styled.h3`
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
  font-size: ${pxToRem(24)};
  color: #f3f2ff;
`;
const GoogleLogo1 = styled.img<RegistrationProps>`
  margin-left: ${pxToRem(10)};
  margin-right: ${pxToRem(16)};
  margin-top: ${pxToRem(-7)};
  background-image: url(${(props: any) => props.src});
`;

export {
  TextWrap1,
  CreateAccountButton,
  SignGoogleButton,
  GoogleLogo1,
  Input,
  TextWrap6,
  TextWrap7,
  TextWrap3,
  TextWrap5,
  TextWrap4,
  LoginLink,
};
