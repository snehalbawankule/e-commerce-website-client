import { StarRating } from "star-rating-react-ts";
import { TextWrap04 } from "./review.styled";
import { Grid, Box } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
export const CommentCard = (props1: any) => {
  const { post } = props1;
  const { isDesktop, isMobile } = useMediaQuery();
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid
          container
          direction="row"
          style={{ paddingTop: 10 }}
          key={post?.id}
        >
          <Box
            style={{
              height: "30px",
              width: "30px",
              backgroundImage: `url(${post?.userProfile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 50,
            }}
          />
          <TextWrap04
            style={{ paddingTop: 3, paddingLeft: isDesktop ? 10 : 7 }}
          >
            <StarRating
              initialRating={post?.rating}
              readOnly
              theme={{
                size: 20,
              }}
            />
          </TextWrap04>

          <TextWrap04 style={{ paddingLeft: isMobile ? 5 : 10 }}>
            {post?.title}
          </TextWrap04>

          <TextWrap04 style={{ paddingLeft: isMobile ? 50 : 10 }}>
            {post?.date}
          </TextWrap04>
          <Grid item xs={12} sm={12}>
            <TextWrap04>{post?.description}</TextWrap04>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
