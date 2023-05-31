export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  user_addresses: [
    {
      id: string;
      userId: string;
      name: string;
      mobile: Number;
      address_line1: string;
      address_line2: string;
      city: string;
      postal_code: string;
      state: string;
      country: string;
      alternative_mobile: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
};

export type defaultState = {
  user: User;
};
export const defaultUser: User = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  user_addresses: [
    {
      id: "",
      userId: "",
      name: "",
      mobile: 0,
      address_line1: "",
      address_line2: "",
      city: "",
      postal_code: "",
      state: "",
      country: "",
      alternative_mobile: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
};
