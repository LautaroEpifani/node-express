import uuid from "react-uuid";
import { bookingsList } from "../services/Bookings";
import express, { ErrorRequestHandler } from "express";
import { Booking } from "../models/models";

//GET all bookings
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    const response = await new Promise((res) =>
      setTimeout(() => {
        res(bookingsList); //simulate call to data from database
      }, 1000)
    );
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request, res: express.Response) => {
  const {
    id = uuid(),
    image,
    guest,
    room_type,
    check_in,
    check_out,
    order_date,
    special_request,
    room_number,
    status,
    color,
    bgrColor,
  } = req.body;

  const newBooking: Booking = {
    id,
    image,
    guest,
    room_type,
    check_in,
    check_out,
    order_date,
    special_request,
    room_number,
    status,
    color,
    bgrColor,
  };
  try {
    const response = await new Promise((res) =>
      setTimeout(() => {
        res(bookingsList.push(newBooking));
      }, 1000)
    );
    res.status(200).json(newBooking);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await new Promise((res) =>
      setTimeout(() => {
        res(bookingsList.filter((booking) => booking.id !== id));
      }, 1000)
    );
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await new Promise((res) =>
      setTimeout(() => {
        let newArray: Booking[] = [];
        let booking: Booking | undefined = bookingsList.find((booking) => booking.id === id);
        booking = { ...booking, ...req.body };
        if (booking) {
          newArray = bookingsList.filter((bookingFilt) => bookingFilt.id !== id)
          newArray.push(booking)
        }
        res(newArray);
      }, 1000)
    );
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
