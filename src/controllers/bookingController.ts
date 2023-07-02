import express from "express";
import { Booking } from "../models/models";
import { deleteBookingService, getBookingService, getBookingsService, postBookingService, updateBookingService } from "../services/bookingService";

//GET all bookings from api 
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getBookingsService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET booking by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getBookingService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request<{},{},Booking> , res: express.Response) => {
  try {
    const response = await postBookingService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteBookingService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request, res: express.Response) => {
 
  try {
    const response = await updateBookingService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};