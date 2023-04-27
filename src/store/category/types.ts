export type Category = {
  id: string;
  name: string;
  image: string;
  subCategory: [
    {
      id: string;
      name: string;
      image: string;
    }
  ];
};

export type defaultState = {
  category: Category[];
};

export const defaultCategory: Category = {
  id: "",
  name: "",
  image: "",
  subCategory: [
    {
      id: "",
      name: "",
      image: "",
    },
  ],
};
