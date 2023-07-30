"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMongoBookingService = exports.deleteMongoBookingService = exports.postMongoBookingService = exports.getMongoBookingService = exports.getMongoBookingsService = void 0;
const bookings_1 = require("../models/bookings");
const rooms_1 = require("../models/rooms");
const getMongoBookingsService = async () => {
    const bookings = await bookings_1.bookingModel.find({}).sort({ createdAt: -1 });
    return bookings;
};
exports.getMongoBookingsService = getMongoBookingsService;
const getMongoBookingService = async (id) => {
    const booking = await bookings_1.bookingModel.findById(id);
    return booking;
};
exports.getMongoBookingService = getMongoBookingService;
const postMongoBookingService = async (newBooking) => {
    const room = await rooms_1.roomModel.findOne({ room_number: newBooking.room_number });
    const addBooking = await bookings_1.bookingModel.create({ ...newBooking, room_id: room?._id });
    room?.bookings.push(addBooking._id);
    await rooms_1.roomModel.findOneAndUpdate({ _id: room?.id }, {
        ...room
    });
    return addBooking;
};
exports.postMongoBookingService = postMongoBookingService;
const deleteMongoBookingService = async (id) => {
    const deleteBooking = await bookings_1.bookingModel.findOneAndDelete({ _id: id });
    return deleteBooking;
};
exports.deleteMongoBookingService = deleteMongoBookingService;
const updateMongoBookingService = async (id, update) => {
    const updateBooking = await bookings_1.bookingModel.findOneAndUpdate({ _id: id }, {
        ...update
    });
    return updateBooking;
};
exports.updateMongoBookingService = updateMongoBookingService;
