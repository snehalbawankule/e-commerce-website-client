import styled from "styled-components";
// const pxToRem = (size: number) => `${size / 16}`;
const Container = styled.div`
  flex-grow: 1;
`;

const Search = styled.div`
  position: relative;
  border-radius: theme.shape.borderRadius;

  background-color: fade(theme.palette.common.black; 0.05);
  "&:hover": {
    background-color: fade(theme.palette.common.black; 0.1);
  }
  margin-right: theme.spacing(2);
  margin-left: 0;
  width: 100%;
  [theme.breakpoints.up("sm")]: {
    margin-left: theme.spacing(3);
    width: "auto";
  }
`;

const Lists = styled.div`
  width: "100%";
  maxwidth: 360;
  backgroundcolor: white;
`;

export { Lists, Search, Container };
