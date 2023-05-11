import styled from "styled-components";

const Container = styled.div`
  flexgrow: 1;
`;

const Appbar = styled.div`
  backgroundcolor: white;
  boxshadow: none;
`;

const Search = styled.div`
  position: "relative";
  borderradius: theme.shape.borderRadius;
  backgroundcolor: fade(theme.palette.common.black; 0.05);
  "&:hover": {
    backgroundcolor: fade(theme.palette.common.black; 0.1);
  }
  marginright: theme.spacing(2);
  marginleft: 0;
  width: "100%";
  [theme.breakpoints.up("sm")]: {
    marginleft: theme.spacing(3);
    width: "auto";
  }
`;
const SearchIcons = styled.div`
  padding: theme.spacing(0; 2);
  height: "100%";
  position: "absolute";
  pointerevents: "none";
  display: "flex";
  alignitems: "center";
  justifycontent: "center";
`;

const Lists = styled.div`
  width: "100%";
  maxwidth: 360;
  backgroundcolor: white;
`;
const Input = styled.input`
  padding: theme.spacing(1, 1, 1, 0);
  paddingleft: 10px;
  transition: theme.transitions.create("width");
  width: "100%";
  [theme.breakpoints.up("md")]: {
    width: "20ch";
  }
`;
export { Lists, Search, SearchIcons, Container, Appbar, Input };
