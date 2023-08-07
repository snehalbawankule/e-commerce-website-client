import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommentCard } from "./review";
import { CommentsBox } from "./review.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { Comment } from "./new-review";
import { getProducts } from "../../store/selectors";
import { useSelector } from "react-redux";

const ReviewList = () => {
  const { isDesktop, isMobile } = useMediaQuery();

  const { id } = useParams();
  const existingPost = useSelector(getProducts);
  var product = existingPost.find((item: any) => item.id === id);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (product) {
      fetch(`http://localhost:3001/get-product-reviews?productId=${product.id}`)
        .then((res) => res.json())
        .then((json) => {
          setReviews(json);
        });
    }
  }, [id, product]);

  return (
    <Grid container display="flex" justifyContent="center">
      {/* <Box
        sx={{
          display: isDesktop ? "flex" : isTablet ? "flex" : "none",
          marginTop: isMobile ? "80px" : "40px",
        }}
      >
        <Comment post={product?.id} />
      </Box> */}
      <CommentsBox
        style={{
          marginTop: isDesktop ? "20px" : isMobile ? "90px" : "30px",
          paddingLeft: isDesktop ? "20px" : isMobile ? "10px" : "30px",
          paddingRight: isDesktop ? "20px" : isMobile ? "10px" : "30px",
        }}
      >
        {reviews?.map((items: any, index: any) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                key={index}
              >
                <CommentCard post={items} />
              </Grid>
            </>
          );
        })}
      </CommentsBox>
      <Box sx={{ flexGrow: 1, display: isMobile ? "flex" : "none" }}>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: isDesktop ? "2px" : isMobile ? "40px" : "5px",
            mx: 2,
            marginBottom: 5,
          }}
        >
          <Comment post={product?.id} />
        </Grid>
      </Box>
    </Grid>
  );
};

export default ReviewList;
