import mongoose from "mongoose";
import { MONGO_URL } from "../keys/env-secrets";

export const connection = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    const db = mongoose.connection;

    db.on("open", () => console.log("Database connected!"));
  } catch (error: any) {
    console.log(error.message);
  }
};
