export type Product = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  gender: string;
  brand: string;
  category: string;
  subCategory: string;
  actualPrice: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
  likes: [
    {
      id: string;
      userEmail: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  comments: [
    {
      commentId: string;
      userName: string;
      rating: number;
      comment: string;
      isReply: boolean;
      replyTo: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
};

export type defaultState = {
  product: Product[];
};
export const defaultProduct: Product = {
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
