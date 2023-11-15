import { Schema, model } from "mongoose";
import { User } from "../interfaces/user-interface";

const shcema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 10,
      unique: true,
    },
    address: {
      state: {
        type: String,
        default: "",
      },
      locality: {
        type: String,
        default: "",
      },
      pin: {
        type: Number,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
    },
    resetToken: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<User>("users", shcema);

export default User;
