import express from 'express';
import { deleteBooking, getBooking, getBookings, postBooking , updateBooking } from '../controllers/bookingController';

export const bookingRoutes = express.Router();

//GET all bookings
bookingRoutes.get('/', getBookings);

//GET single booking
bookingRoutes.get('/:id', getBooking);

//POST new Booking
bookingRoutes.post('/', postBooking);

//DELETE booking
bookingRoutes.delete('/:id', deleteBooking);

//UPDATE booking
bookingRoutes.patch('/:id', updateBooking);
