import express from "express";
import { Booking } from "../interfaces/interfaces";
import { postBookingValidator, updateBookingValidator } from "../validators/bookingValidator";
import { deleteMongoBookingService, getMongoBookingService, getMongoBookingsService, postMongoBookingService, updateMongoBookingService } from "../mongoService/bookingService";
import mongoose from "mongoose";

//GET all bookings from api 
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMongoBookingsService();
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET booking by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if(mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await getMongoBookingService(id);
      res.status(200).send(response)
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({error: 'No such booking'})
  }
 
};

//POST new Booking
export const postBooking = async (req: express.Request<{},{},Booking> , res: express.Response) => {
  const newBooking: Booking = { ...req.body };
  try {
    postBookingValidator.validateAsync(newBooking);
    const response = await postMongoBookingService(newBooking);
    res.status(200).send(response + ". Booking added with success")
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request<{id: string}>, res: express.Response) => {
  const { id } = req.params;
  if(mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await deleteMongoBookingService(id);
      res.status(200).json(response + ". Booking deleted with success")
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({error: 'No such booking'})
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request<{id: string},{},Partial<Booking>>, res: express.Response) => {
  const { id } = req.params;
  const update = req.body;
  if(mongoose.Types.ObjectId.isValid(id)) {
    try {
      updateBookingValidator.validateAsync(update);
      const response = await updateMongoBookingService(id, update);
      res.status(200).json(response + ". Booking updated with success")
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({error: 'No such booking'})
  }
};

