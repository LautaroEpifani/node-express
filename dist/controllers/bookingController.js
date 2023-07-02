"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = exports.deleteBooking = exports.postBooking = exports.getBooking = exports.getBookings = void 0;
const bookingService_1 = require("../services/bookingService");
//GET all bookings
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.getBookingsService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBookings = getBookings;
//GET booking by id
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.getBookingService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBooking = getBooking;
//POST new Booking
const postBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.postBookingService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postBooking = postBooking;
//DELETE booking
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.deleteBookingService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteBooking = deleteBooking;
//UPDATE booking
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.updateBookingService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateBooking = updateBooking;
