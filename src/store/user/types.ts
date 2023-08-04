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
      mobile: string;
      address_line1: string;
      address_line2: string;
      city: string;
      postal_code: string;
      state: string;
      country: string;
      alternative_mobile: string;
      address_type: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
};

export type defaultState = {
  user: User;
};
