import { useAppSelector } from "../../hooks/hooks";
import { Grid } from "@mui/material";
import FaqsCard from "./faqs-card";
import { useLocation } from "react-router-dom";
import { ProductName } from "../new-arrivals/new-arrivals.styled";

const FaqsList = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const segments = currentPage.split("/");

  const decodedString = decodeURIComponent(segments[1]);
  console.log(decodedString);
  const Products = useAppSelector((state) => state.helpCenter.helpCenter);
  console.log(Products);
  const something = Products.find((item) => item.name === decodedString);
  console.log(something);

  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          spacing={2}
          marginLeft="330px"
          style={{
            marginBottom: 50,
            paddingBottom: 20,
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <ProductName style={{ marginTop: 100 }}>
              {something?.name}
            </ProductName>
          </Grid>
          {something?.faqs.map((post: any, index: any) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                key={index}
              >
                <FaqsCard post={post} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default FaqsList;
