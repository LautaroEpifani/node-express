import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    archived: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const messageModel = mongoose.model("Message", messageSchema);
