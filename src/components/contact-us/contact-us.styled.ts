import styled from "styled-components";

const pxToRem = (size: number) => `${size / 16}rem`;

const Input = styled.input`
  font-weight: 300;
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;

  @media (max-width: 767px) {
    margin-bottom: ${pxToRem(30)};
  }
  @media (min-width: 768px) {
    width: ${pxToRem(500)};
  }
  ::placeholder {
    color: #2f2e41bf;
  }
`;
const NewArticle = styled.div`
  margin-top: 50px;
  font-weight: 700;
  font-size: 36px;
  color: #2f2e41;
  @media (max-width: 767px) {
    font-size: ${pxToRem(20)};
  }
`;
const PostButton = styled.button`
  width: ${pxToRem(178)};
  height: ${pxToRem(58)};

  color: white;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  background: #2f2e41;
  border-radius: 9.62162px;
  @media (max-width: 767px) {
    width: ${pxToRem(120)};
    height: ${pxToRem(30)};
    font-size: ${pxToRem(18)};
  }
`;
export { Input, PostButton, NewArticle };
