import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductName } from "../new-arrivals/new-arrivals.styled";

const FaqsCard = (props: any) => {
  const { post } = props;
  console.log(post);
  let history = useNavigate();

  const handleChange = () => {
    history(`/products/${post.id}`);
  };

  return (
    <Box onClick={handleChange} key={post?.id} sx={{ display: "grid" }}>
      <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
        <ProductName>{post?.name}</ProductName>
      </Grid>
    </Box>
  );
};
export default FaqsCard;
