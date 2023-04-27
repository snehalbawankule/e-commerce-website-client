export type Brand = {
  id: string;
  name: string;
  image: string;
};

export type defaultState = {
  brand: Brand[];
};

export const defaultBrand: Brand = {
  id: "",
  name: "",
  image: "",
};
