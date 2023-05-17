export type Category = {
  id: string;
  name: string;
  image: string;
  sub_categories: [
    {
      id: string;
      categoryId: string;
      name: string;
      sub_sub_categories: [
        {
          id: string;
          subCategoryId: string;
          name: string;
        }
      ];
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
  sub_categories: [
    {
      id: "",
      categoryId: "",
      name: "",
      sub_sub_categories: [
        {
          id: "",
          subCategoryId: "",
          name: "",
        },
      ],
    },
  ],
};
