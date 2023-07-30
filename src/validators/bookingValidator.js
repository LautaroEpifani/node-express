"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingValidator = exports.postBookingValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postBookingValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    guest: joi_1.default.string().max(50).required(),
    id: joi_1.default.string().max(100).optional(),
    check_in: joi_1.default.date().required(),
    check_out: joi_1.default.date().required(),
    order_date: joi_1.default.date().required(),
    special_request: joi_1.default.string().max(800).required(),
    room_number: joi_1.default.number().integer().positive().required(),
    status: joi_1.default.string().valid('Check In', 'Check Out', 'In Progress').required(),
    color: joi_1.default.string().max(10).optional(),
    bgr_color: joi_1.default.string().max(10).optional(),
});
exports.updateBookingValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    guest: joi_1.default.string().max(50).optional(),
    id: joi_1.default.string().max(100).optional(),
    check_in: joi_1.default.date().optional(),
    check_out: joi_1.default.date().optional(),
    order_date: joi_1.default.date().optional(),
    special_request: joi_1.default.string().max(800).optional(),
    room_number: joi_1.default.number().optional(),
    status: joi_1.default.string().valid('Check In', 'Check Out', 'In Progress').optional(),
    color: joi_1.default.string().max(10).optional(),
    bgr_color: joi_1.default.string().max(10).optional(),
});
