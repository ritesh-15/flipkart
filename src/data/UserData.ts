import { ObjectId } from "mongoose";
import { User, Address } from "../interfaces/user-interface";

class UserData {
  name: string;
  email: string;
  phone: number;
  address: Address;
  createdAt: Date;
  _id: ObjectId | string;

  constructor(user: User) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.address = user.address;
    this.createdAt = user.createdAt;
    this.phone = user.phone;
  }
}

export default UserData;
