export type IApartment = {
  name: string;

  description: string;

  coordinates: string;

  number_of_rooms: number;

  price_per_month: number;

  floor_area_size: number;

  status?: boolean;
  id?: any;
};

export enum ROLES_USERS {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  REALTOR = "REALTOR",
}

export type User = {
  email: string;
  username: string;
  role: ROLES_USERS;
};

export type FilterApartmentQuery = {
  number_of_rooms?: number;

  price_per_month?: number;

  floor_area_size?: number;

  skip?: number;

  take?: number;
};
