import express from "express";
import { Booking } from "../models/models";
import { deleteSqlBookingService, getSqlBookingService, getSqlBookingsService, postSqlBookingService, updateSqlBookingService } from "../sqlService/bookingService";

//GET all bookings from api 
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlBookingsService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET booking by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlBookingService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request<{},{},Booking> , res: express.Response) => {
  try {
    await postSqlBookingService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    await deleteSqlBookingService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request, res: express.Response) => {
 
  try {
    await updateSqlBookingService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

