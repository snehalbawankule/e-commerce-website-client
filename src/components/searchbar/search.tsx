import { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Grid,
  InputBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Search, Lists } from "./search.styled";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchInputChange = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);
    fetch(
      `http://localhost:3001/getproducts/search?size=6&q=${event.target.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        setSearchResults(json);
      });
  };

  const handleChange = (event: any, id: any) => {
    event.preventDefault();
    setSearchResults([]);
    setSearchQuery("");
    navigate(`/products/${id}`);
    console.log(id);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "white",
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <Search>
            <Grid container paddingTop="15px">
              <Grid item xs={6} sm={6} md={11} lg={11}>
                <InputBase
                  placeholder="Search…"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                <SearchIcon style={{ color: "gray", fontSize: 30 }} />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={12} lg={12}>
              {searchResults.length > 0 && (
                <Lists>
                  <List>
                    {searchResults.map((result: any) => (
                      <ListItem
                        key={result}
                        style={{ color: "black" }}
                        onClick={(event) => handleChange(event, result.id)}
                        // onClose={handleCloseNavMenu}
                      >
                        {result.name}
                      </ListItem>
                    ))}
                  </List>
                </Lists>
              )}
            </Grid>
          </Search>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default SearchBar;
