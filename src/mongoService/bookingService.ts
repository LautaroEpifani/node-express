import { Booking, Room } from "../interfaces/interfaces";
import { bookingModel } from "../models/bookings";
import { roomModel } from "../models/rooms";

export const getMongoBookingsService = async () => {
  const bookings = await bookingModel.find({}).sort({createdAt: -1})
  return bookings;
};

export const getMongoBookingService = async (id: string) => {
  const booking = await bookingModel.findById(id);
  return booking;
};

export const postMongoBookingService = async (newBooking: Booking) => {
  const room = await roomModel.findOne({ room_number: newBooking.room_number })
  const addBooking = await bookingModel.create({...newBooking, room_id: room?._id});
  room?.bookings.push(addBooking._id);
  await roomModel.findOneAndUpdate({_id: room?.id}, {
    ...room
  })
  return addBooking;
};

export const deleteMongoBookingService = async (id: string) => {
  const deleteBooking = await bookingModel.findOneAndDelete({_id: id})
  return deleteBooking;
};

export const updateMongoBookingService = async (id: string, update: Partial<Booking>) => {
  const updateBooking = await bookingModel.findOneAndUpdate({_id: id}, {
    ...update
  })
  return updateBooking;
};
