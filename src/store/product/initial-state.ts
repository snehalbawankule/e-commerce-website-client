import { Product } from "./types";

const defaultProduct: Product = {
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
  discountPrice: 0,
  createdAt: new Date("2023-10-02"),
  updatedAt: new Date("2023-10-02"),
  product_images: [
    {
      id: "",
      name: "",
    },
  ],
  likes: [
    {
      id: "",
      userEmail: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
  reviews: [
    {
      id: "",
      productId: "",
      userId: "",
      rating: 0,
      image: "",
      title: "",
      description: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
};

export { defaultProduct };
