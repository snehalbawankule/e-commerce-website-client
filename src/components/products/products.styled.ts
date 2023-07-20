import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const CategoryName = styled.div`
  font-weight: 700;
  fontsize: ${pxToRem(45)};
  color: black;
  text-transform: capitalize;
  padding-bottom: ${pxToRem(10)};
`;

const Scroller = styled.div`
  background: #fff;
  padding: 8px 8px 8px 8px;
  margin: 12px 0px 5px 0px;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);
  border: 1px solid #dadce0;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  overflow: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;
export { CategoryName, Scroller };
