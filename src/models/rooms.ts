import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
    room_type: {
      type: String,
      enum: ["Double Bed", "Single Bed", "Suite"],
      required: true,
    },
    room_number: {
      type: Number,
      required: true,
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    amenities: [
      {
        a_name: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },

    offer: {
      type: String,
      required: true,
    },
    offer_price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    cancellation: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Booked"],
      required: true,
    },
  },
  { timestamps: true }
);

export const roomModel = mongoose.model("Room", roomSchema);
