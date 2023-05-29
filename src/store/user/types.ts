export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  user_address: {
    id: string;
    userId: string;
    address_line1: string;
    address_line2: string;
    city: string;
    postal_code: string;
    state: string;
    country: string;
    mobile: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type defaultState = {
  user: User;
};
export const defaultUser: User = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  user_address: {
    id: "",
    userId: "",
    address_line1: "",
    address_line2: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
    mobile: "",
    createdAt: new Date("2023-10-02"),
    updatedAt: new Date("2023-10-02"),
  },
};
