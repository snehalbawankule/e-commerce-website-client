import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;
const Input = styled.input`
  font-weight: 300;
  height: 40px;
  font-size: ${pxToRem(17)};
  border-width: 1px;
  margin-bottom: ${pxToRem(20)};

  @media (min-width: 768px) {
    width: ${pxToRem(300)};
  }
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const TextWrapFooter = styled.div`
  font-weight: 300;
  color: #000000;

  font-size: ${pxToRem(20)};
  @media (max-width: 767px) {
    font-size: ${pxToRem(16)};
  }
`;
export { Input, TextWrapFooter };
