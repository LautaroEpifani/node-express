"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingService = exports.deleteBookingService = exports.postBookingService = exports.getBookingService = exports.getBookingsService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs_1.default.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);
const getBookingsService = async () => {
    return readBookings;
};
exports.getBookingsService = getBookingsService;
const getBookingService = async (id) => {
    const booking = bookingsJson.find((booking) => booking.id.toString() === id);
    return JSON.stringify(booking);
};
exports.getBookingService = getBookingService;
const postBookingService = async (newBooking) => {
    bookingsJson.push(newBooking);
    fs_1.default.writeFileSync(directory, JSON.stringify(bookingsJson));
};
exports.postBookingService = postBookingService;
const deleteBookingService = async (id) => {
    const newArray = bookingsJson.filter((booking) => booking.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.deleteBookingService = deleteBookingService;
const updateBookingService = async (id, newBooking) => {
    let newArray = [];
    let booking = bookingsJson.find((booking) => booking.id.toString() === id);
    booking = { ...booking, ...newBooking }; //newBooking sería el ...req.body
    if (booking) {
        newArray = bookingsJson.filter((bookingFilt) => bookingFilt.id.toString() !== id);
        newArray.push(booking);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.updateBookingService = updateBookingService;
