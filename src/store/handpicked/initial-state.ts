import { HandPicked } from "./types";

const defaultHandPicked: HandPicked = {
  id: "",
  name: "",
  title: "",
  description: "",
  image: "",
  gender: "",
  brand: "",
  category: "",
  subCategory: "",
  actualPrice: 0,
  discount: 0,
  createdAt: new Date("2023-10-02"),
  updatedAt: new Date("2023-10-02"),

  likes: [
    {
      id: "",
      userEmail: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
  comments: [
    {
      commentId: "",
      userName: "",
      rating: 0,
      comment: "",
      isReply: false,
      replyTo: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
};

export { defaultHandPicked };
