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
exports.updateMongoBookingService = exports.deleteMongoBookingService = exports.postMongoBookingService = exports.getMongoBookingService = exports.getMongoBookingsService = void 0;
const bookings_1 = require("../models/bookings");
const rooms_1 = require("../models/rooms");
const getMongoBookingsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield bookings_1.bookingModel.find({}).sort({ createdAt: -1 });
    return bookings;
});
exports.getMongoBookingsService = getMongoBookingsService;
const getMongoBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield bookings_1.bookingModel.findById(id);
    return booking;
});
exports.getMongoBookingService = getMongoBookingService;
const postMongoBookingService = (newBooking) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield rooms_1.roomModel.findOne({ room_number: newBooking.room_number });
    const addBooking = yield bookings_1.bookingModel.create(Object.assign(Object.assign({}, newBooking), { room_id: room === null || room === void 0 ? void 0 : room._id }));
    room === null || room === void 0 ? void 0 : room.bookings.push(addBooking._id);
    yield rooms_1.roomModel.findOneAndUpdate({ _id: room === null || room === void 0 ? void 0 : room.id }, Object.assign({}, room));
    return addBooking;
});
exports.postMongoBookingService = postMongoBookingService;
const deleteMongoBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteBooking = yield bookings_1.bookingModel.findOneAndDelete({ _id: id });
    return deleteBooking;
});
exports.deleteMongoBookingService = deleteMongoBookingService;
const updateMongoBookingService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateBooking = yield bookings_1.bookingModel.findOneAndUpdate({ _id: id }, Object.assign({}, update));
    return updateBooking;
});
exports.updateMongoBookingService = updateMongoBookingService;
