import { Category } from "./types";

const defaultCategory: Category = {
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

export { defaultCategory };
