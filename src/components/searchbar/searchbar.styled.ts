import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;
const Input = styled.input`
  font-weight: 300;
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-top: 8px;
  height: 40px;

  @media (min-width: 768px) {
    width: ${pxToRem(900)};
  }
  ::placeholder {
    color: #2f2e41bf;
  }
`;
export { Input };
