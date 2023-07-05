import fs from "fs";
import path from "path";
import { Booking } from "../models/models";

const directory = path.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);

export const getBookingsService = async () => {
  return readBookings;
};

export const getBookingService = async (id: string) => {
  const booking = bookingsJson.find((booking: Booking) => booking.id.toString() === id);
  return JSON.stringify(booking);
};

export const postBookingService = async (newBooking: Booking) => {
  bookingsJson.push(newBooking);
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));
};

export const deleteBookingService = async (id: string) => {
  const newArray = bookingsJson.filter((booking: Booking) => booking.id.toString() !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
};

export const updateBookingService = async (id: string, newBooking: Booking) => {
  let newArray: Booking[] = [];
  let booking: Booking | undefined = bookingsJson.find((booking: Booking) => booking.id.toString() === id);
  booking = { ...booking, ...newBooking }; //newBooking sería el ...req.body
  if (booking) {
    newArray = bookingsJson.filter((bookingFilt: Booking) => bookingFilt.id.toString() !== id);
    newArray.push(booking);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
};
