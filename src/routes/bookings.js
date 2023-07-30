"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controllers/bookingController");
exports.bookingRoutes = express_1.default.Router();
//GET all bookings
exports.bookingRoutes.get('/', bookingController_1.getBookings);
//GET single booking
exports.bookingRoutes.get('/:id', bookingController_1.getBooking);
//POST new Booking
exports.bookingRoutes.post('/', bookingController_1.postBooking);
//DELETE booking
exports.bookingRoutes.delete('/:id', bookingController_1.deleteBooking);
//UPDATE booking
exports.bookingRoutes.patch('/:id', bookingController_1.updateBooking);
