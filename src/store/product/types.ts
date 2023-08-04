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
