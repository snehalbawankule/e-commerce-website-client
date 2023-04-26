import React, { useState } from "react";
import { Grid, Card, Box } from "@mui/material";
import { TextWrap02 } from "./new-arrivals.styled";
// import ReactionButtons from "../add-reaction";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";
// import { AllReactions } from "../all-reactions/all-reactions";

const NewArrivalsCard = (props: any) => {
  const { post } = props;
  const { id } = post;

  let history = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box onClick={() => history(`/products/${id}`)}>
            <Box
              style={{
                height: "150px",
                backgroundImage: `url(${post.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transform: hovered ? "scale(1.1)" : "scale(1)",
                transition: "all 0.2s ease-in-out",
                borderRadius: "16px",
              }}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            />

            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
              <TextWrap02
                style={{
                  height: 80,
                }}
              >
                {post.title}
              </TextWrap02>
            </Grid>
          </Box>
          {/* <AllReactions post={post} />
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pt: 2 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 3 }}>
            <ReactionButtons post={post} key={post.id} />
          </Grid> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewArrivalsCard;
