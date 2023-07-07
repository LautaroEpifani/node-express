import express from "express";
import { Booking } from "../models/models";
import { deleteSqlBookingService, getSqlBookingService, getSqlBookingsService, postSqlBookingService, updateSqlBookingService } from "../sqlService/bookingService";
import { postBookingValidator, updateBookingValidator } from "../validators/bookingValidator";
import { idValidator } from "../validators/idValidator";
import { postBookingsSQL } from "../script/seed";

//GET all bookings from api 
export const getBookings = async (req: express.Request, res: express.Response) => {
  postBookingsSQL()
  try {
    const response = await getSqlBookingsService();
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET booking by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await getSqlBookingService(id);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request<{},{},Booking> , res: express.Response) => {
  const newBooking: Booking = { ...req.body };
  try {
    postBookingValidator.validateAsync(newBooking);
    const response = await postSqlBookingService(newBooking);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request<{id: string}>, res: express.Response) => {
  const { id } = req.params;
  try {
    idValidator.validateAsync(parseInt(id));
    const response = await deleteSqlBookingService(id);
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request<{id: string},{},Partial<Booking>>, res: express.Response) => {
  const { id } = req.params;
  const update = req.body;
  try {
    idValidator.validateAsync(parseInt(id));
    updateBookingValidator.validateAsync(update);
    const response = await updateSqlBookingService(id, update);
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

