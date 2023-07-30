"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = exports.deleteBooking = exports.postBooking = exports.getBooking = exports.getBookings = void 0;
const bookingValidator_1 = require("../validators/bookingValidator");
const bookingService_1 = require("../mongoService/bookingService");
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("../server"));
//GET all bookings from api 
const getBookings = async (req, res) => {
    (0, server_1.default)();
    try {
        const response = await (0, bookingService_1.getMongoBookingsService)();
        const str = JSON.stringify(response);
        res.status(200).send(str);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getBookings = getBookings;
//GET booking by id
const getBooking = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, bookingService_1.getMongoBookingService)(id);
            const str = JSON.stringify(response);
            res.status(200).send(str);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
};
exports.getBooking = getBooking;
//POST new Booking
const postBooking = async (req, res) => {
    const newBooking = { ...req.body };
    try {
        bookingValidator_1.postBookingValidator.validateAsync(newBooking);
        const response = await (0, bookingService_1.postMongoBookingService)(newBooking);
        // res.status(200).send( response + ". Booking added with success")
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.postBooking = postBooking;
//DELETE booking
const deleteBooking = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, bookingService_1.deleteMongoBookingService)(id);
            res.status(200).json(response + ". Booking deleted with success");
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
};
exports.deleteBooking = deleteBooking;
//UPDATE booking
const updateBooking = async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            bookingValidator_1.updateBookingValidator.validateAsync(update);
            const response = await (0, bookingService_1.updateMongoBookingService)(id, update);
            res.status(200).json(response + ". Booking updated with success");
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
};
exports.updateBooking = updateBooking;
