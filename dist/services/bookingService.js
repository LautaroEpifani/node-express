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
exports.updateBookingService = exports.deleteBookingService = exports.postBookingService = exports.getBookingService = exports.getBookingsService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs_1.default.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);
const getBookingsService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(readBookings);
});
exports.getBookingsService = getBookingsService;
const getBookingService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const booking = bookingsJson.find((booking) => booking.id === id);
    res.send(JSON.stringify(booking));
});
exports.getBookingService = getBookingService;
const postBookingService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = Object.assign(Object.assign({}, req.body), { id: "asdewkjfewkfas" });
    bookingsJson.push(newBooking);
    fs_1.default.writeFileSync(directory, JSON.stringify(bookingsJson));
    const newReadBookings = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadBookings);
});
exports.postBookingService = postBookingService;
const deleteBookingService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newArray = bookingsJson.filter((booking) => booking.id !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadBookings = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadBookings);
});
exports.deleteBookingService = deleteBookingService;
const updateBookingService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let newArray = [];
    let booking = bookingsJson.find((booking) => booking.id === id);
    booking = Object.assign(Object.assign({}, booking), req.body);
    if (booking) {
        newArray = bookingsJson.filter((bookingFilt) => bookingFilt.id !== id);
        newArray.push(booking);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadBookings = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadBookings);
});
exports.updateBookingService = updateBookingService;
