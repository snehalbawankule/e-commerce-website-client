import { User } from "./types";

const defaultUser: User = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  user_addresses: [
    {
      id: "",
      userId: "",
      name: "",
      mobile: "",
      address_line1: "",
      address_line2: "",
      city: "",
      postal_code: "",
      state: "",
      country: "",
      alternative_mobile: "",
      address_type: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
};
export { defaultUser };
