import { Schema, model } from "mongoose";

const shcema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token = model("tokens", shcema);

export default Token;
