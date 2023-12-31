import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  guest: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  room_number: {
    type: Number,
    required: true
  },
  special_request: {
    type: String,
    required: true
  },
  order_date: {
    type: String,
    required: true
  },
  check_in: {
    type: String,
    required: true
  },
  check_out: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  bgr_color: {
    type: String,
    required: false
  }
 }, { timestamps: true });

export const bookingModel = mongoose.model("Booking", bookingSchema)