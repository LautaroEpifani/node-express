import fs from "fs";
import path from "path";
import express from "express";
import { Booking } from "../models/models";


const directory = path.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);

export const getBookingsService = async (req: express.Request, res: express.Response) => {
  res.send(readBookings);
};

export const getBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const booking = bookingsJson.find((booking: Booking) => booking.id === id);
  res.send(JSON.stringify(booking));
};

export const postBookingService = async (req: express.Request, res: express.Response) => {
  const newBooking: Booking = { ...req.body, id: "asdewkjfewkfas" };
  bookingsJson.push(newBooking);
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));
  const newReadBookings = fs.readFileSync(directory, "utf8");
  res.send(newReadBookings);
};

export const deleteBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newArray = bookingsJson.filter((booking: Booking) => booking.id !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadBookings = fs.readFileSync(directory, "utf8");
  res.send(newReadBookings);
};

export const updateBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  let newArray: Booking[] = [];
  let booking: Booking | undefined = bookingsJson.find((booking: Booking) => booking.id === id);
  booking = { ...booking, ...req.body };
  if (booking) {
    newArray = bookingsJson.filter((bookingFilt: Booking) => bookingFilt.id !== id);
    newArray.push(booking);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadBookings = fs.readFileSync(directory, "utf8");
  res.send(newReadBookings);
};
