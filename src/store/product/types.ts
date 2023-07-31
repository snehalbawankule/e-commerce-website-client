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
  discountPrice: number;
  createdAt: Date;
  updatedAt: Date;
  product_images: [
    {
      name: string;
    }
  ];
  likes: [
    {
      id: string;
      userEmail: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  reviews: [
    {
      id: string;
      productId: string;
      userId: string;
      rating: number;
      image: string;
      title: string;
      description: string;
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
  discountPrice: 0,
  createdAt: new Date("2023-10-02"),
  updatedAt: new Date("2023-10-02"),
  product_images: [
    {
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
