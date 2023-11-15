import { ObjectId } from "mongoose";

export interface Address {
  state: string;
  city: string;
  pin: number;
  locality: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: Address;
  resetToken: string;
  createdAt: Date;
  updatedAt: Date;
  _id: ObjectId | string;
  isVerified: boolean;
}
