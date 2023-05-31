import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #512da8;
  font-size: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  backgroundimage: url(${(props) => props.src});
`;
const ProfileText = styled.div`
  padding-top: ${pxToRem(16)};
  font-weight: 500;
  font-size: ${pxToRem(18)};
`;
const EditButton = styled.button`
  font-size: ${pxToRem(16)};
  margin-left: ${pxToRem(20)};
  border: none;
  display: flex;
  color: #2874f0;
  align-items: end;
  background: none;
`;

const ProfileInfoTitle = styled.div`
  font-size: ${pxToRem(18)};
  margin-top: ${pxToRem(16)};
  font-weight: 500;
  color: #2f2e41;
`;
const PostButton = styled.button`
  font-size: ${pxToRem(16)};
  border: none;
  background: none;

  margin-left: ${pxToRem(10)};
`;
const SaveButton = styled.button`
  height: 55px;
  font-weight: 400;
  margin-left: ${pxToRem(32)};
  font-size: 1.3125rem;
  color: rgb(243, 242, 255);
  background: rgb(47, 46, 65);
  border-radius: 9.00744px;
  padding-left: ${pxToRem(32)};
  padding-right: ${pxToRem(32)};
`;
export {
  ProfileImage,
  PostButton,
  ProfileText,
  ProfileInfoTitle,
  SaveButton,
  EditButton,
};
