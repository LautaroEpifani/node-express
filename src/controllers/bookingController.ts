import express from "express";
import { Booking } from "../models/models";
import { deleteSqlBookingService, getSqlBookingService, getSqlBookingsService, postSqlBookingService, updateSqlBookingService } from "../sqlService/bookingService";
import { postBookingsSQL, postMessagesSQL, postRoomsSQL, postUsersSQL } from "../script/seed";

//GET all bookings from api 
export const getBookings = async (req: express.Request, res: express.Response) => {
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
      //postValid(booking)
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
    //idValid
    const response = await deleteSqlBookingService(id);
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const update = req.body;
  try {
    //idValidator
    //putValidator(booking)
    const response = await updateSqlBookingService(id, update);
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

