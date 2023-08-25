import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    employee_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      required: true,
    },
    position: {
      type: String,
      enum: ["Manager", "Reception", "Room Service"],
      required: true,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
