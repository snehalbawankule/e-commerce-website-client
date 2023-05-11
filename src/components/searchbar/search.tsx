import { useState } from "react";
import { AppBar, Toolbar, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Appbar, Search, SearchIcons, Lists } from "./search.styled";
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  return (
    <Container>
      <Appbar>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "white" }}>
            <Search>
              <SearchIcons>
                <SearchIcon />
              </SearchIcons>
              <InputBase
                style={{ width: "50vw" }}
                placeholder="Search…"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {searchResults.length > 0 && (
                <Lists>
                  <List>
                    {searchResults.map((result: any) => (
                      <ListItem key={result} style={{ color: "black" }}>
                        {result.name}
                      </ListItem>
                    ))}
                  </List>
                </Lists>
              )}
            </Search>
          </Toolbar>
        </AppBar>
      </Appbar>
    </Container>
  );
}

export default SearchBar;
