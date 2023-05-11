import { Input } from "./searchbar.styled";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { List, ListItem } from "@mui/material";
import { TextWrap01 } from "../new-arrivals/new-arrivals.styled";

const SearchBar = () => {
  const [product, setProduct] = useState({
    productName: "",
    isFetching: false,
  });
  const [products, setProducts] = useState([]);

  const searchbarHandler = (event: any) => {
    event?.preventDefault();
    setProduct({
      ...product,
      [product.productName]: event.target.value,
      isFetching: true,
    });

    fetch(
      `http://localhost:3001/getproducts/search?size=6&q=${event.target.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  return (
    <Grid container>
      <Grid
        item
        md={12}
        lg={12}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Input
          type="text"
          value={product.productName}
          placeholder="Search..."
          onChange={searchbarHandler}
        />
      </Grid>
      {products.length === 0 ? null : (
        <List>
          {products.map((post: any) => {
            return (
              <Grid
                item
                key={post.id}
                md={7}
                lg={7}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItem>{post.name}</ListItem>
              </Grid>
            );
          })}
        </List>
      )}
    </Grid>
  );
};
export default SearchBar;
