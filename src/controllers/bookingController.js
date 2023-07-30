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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = exports.deleteBooking = exports.postBooking = exports.getBooking = exports.getBookings = void 0;
const bookingValidator_1 = require("../validators/bookingValidator");
const bookingService_1 = require("../mongoService/bookingService");
const mongoose_1 = __importDefault(require("mongoose"));
//GET all bookings from api 
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, bookingService_1.getMongoBookingsService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBookings = getBookings;
//GET booking by id
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, bookingService_1.getMongoBookingService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
});
exports.getBooking = getBooking;
//POST new Booking
const postBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = Object.assign({}, req.body);
    try {
        bookingValidator_1.postBookingValidator.validateAsync(newBooking);
        const response = yield (0, bookingService_1.postMongoBookingService)(newBooking);
        res.status(200).send(response + ". Booking added with success");
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postBooking = postBooking;
//DELETE booking
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, bookingService_1.deleteMongoBookingService)(id);
            res.status(200).json(response + ". Booking deleted with success");
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
});
exports.deleteBooking = deleteBooking;
//UPDATE booking
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const update = req.body;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            bookingValidator_1.updateBookingValidator.validateAsync(update);
            const response = yield (0, bookingService_1.updateMongoBookingService)(id, update);
            res.status(200).json(response + ". Booking updated with success");
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: 'No such booking' });
    }
});
exports.updateBooking = updateBooking;
