import { useState } from "react";
import { useNavigate } from "react-router";
import { StarRating } from "star-rating-react-ts";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import { actions } from "../../store/reducer";
import { Input } from "./review.styled";
import { useAppDispatch } from "../../hooks/hooks";

export const Comment = (props: any) => {
  const { post } = props;
  var currentUser = JSON.parse(localStorage.getItem("current") || "{}");
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");
  const handleChange = (event: any) => {
    setComment(event.target.value);
  };
  const navigate = useNavigate();
  const isTextareaDisabled = comment?.length === 0;
  const [exampleOneRating, setExampleOneRating] = useState<number>(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newComment = {
      userName: currentUser.name,
      userProfile: currentUser.profile,
      rating: exampleOneRating,
      comment: comment,
      isReply: false,
    };
    // dispatch(actions.addComment(newComment));
    navigate(`/articles/${post}`);
  };

  return (
    <Grid container display="flex" direction="column" justifyContent="center">
      <Grid item display="flex">
        <StarRating
          initialRating={exampleOneRating}
          onClick={(newRating: any) => setExampleOneRating(newRating)}
          theme={{
            size: 20,
          }}
        />
      </Grid>
      <Grid container display="flex" direction="row">
        <Input
          name="comment"
          placeholder="comment"
          defaultValue={comment}
          onBlurCapture={handleChange}
        />

        <Button
          disabled={isTextareaDisabled}
          onClick={(e) => handleSubmit(e)}
          sx={{ pl: 2, color: "#6d6d6d" }}
        >
          <SendIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
