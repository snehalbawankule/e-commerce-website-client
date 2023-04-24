import { Input } from "./searchbar.styled";
import { AppBar, Button, Grid } from "@mui/material";
import { TextWrap4 } from "../navbar/navbar.styled";
import useMediaQuery from "../../hooks/use-media-query";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const SearchBar = () => {
  const { isDesktop } = useMediaQuery();
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          background: "black",
          color: "white",
          alignItems: "center",
          height: 60,
        }}
      >
        <Grid container>
          <Grid
            item
            md={3}
            lg={3}
            style={{
              paddingLeft: isDesktop ? 10 : 10,
              display: "flex",
            }}
          >
            <TextWrap4>Hansels Foundation</TextWrap4>
          </Grid>
          <Grid
            item
            md={3}
            lg={3}
            style={{
              paddingLeft: isDesktop ? 10 : 10,
              display: "flex",
            }}
          >
            <Input type="text" name="name" placeholder="Search"></Input>
            <Button>
              <SearchIcon />
            </Button>

            <PersonIcon />

            <FavoriteBorderIcon />
            <ShoppingCartIcon />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};
export default SearchBar;
