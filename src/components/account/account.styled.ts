import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #512da8;
  font-size: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

const PostButton = styled.button`
  font-size: ${pxToRem(16)};
  border: none;
  background: none;
  margin-left: ${pxToRem(10)};
`;

export { ProfileImage, PostButton };
