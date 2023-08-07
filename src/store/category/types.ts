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
