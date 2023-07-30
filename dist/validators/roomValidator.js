"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoomValidator = exports.postRoomValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postRoomValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    id: joi_1.default.string().max(100).required(),
    images: joi_1.default.array().required(),
    room_type: joi_1.default.string().valid('Double Bed', 'Single Bed', 'Suite').required(),
    room_number: joi_1.default.number().integer().positive().required(),
    amenities: joi_1.default.array().required(),
    price: joi_1.default.number().integer().positive().required(),
    discount: joi_1.default.number().integer().positive().required(),
    offer: joi_1.default.string().valid('yes', 'no').required(),
    offer_price: joi_1.default.number().integer().positive().required(),
    description: joi_1.default.string().max(500).required(),
    cancellation: joi_1.default.string().max(800).required(),
    status: joi_1.default.string().valid('Available', 'Booked').required(),
    bookings: joi_1.default.array().required(),
});
exports.updateRoomValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    id: joi_1.default.string().max(100).optional(),
    images: joi_1.default.array().optional(),
    room_type: joi_1.default.string().valid('Double Bed', 'Single Bed', 'Suite').optional(),
    room_number: joi_1.default.number().integer().positive().optional(),
    amenities: joi_1.default.array().optional(),
    price: joi_1.default.number().integer().positive().optional(),
    discount: joi_1.default.number().integer().positive().optional(),
    offer: joi_1.default.string().valid('yes', 'no').optional(),
    offer_price: joi_1.default.number().integer().positive().optional(),
    description: joi_1.default.string().max(500).optional(),
    cancellation: joi_1.default.string().max(800).optional(),
    status: joi_1.default.string().valid('Available', 'Booked').optional(),
    bookings: joi_1.default.array().optional(),
});
