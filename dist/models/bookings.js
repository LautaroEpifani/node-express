"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bookingSchema = new Schema({
    guest: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    room_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Room",
    },
    room_number: {
        type: Number,
        required: true
    },
    special_request: {
        type: String,
        required: true
    },
    order_date: {
        type: String,
        required: true
    },
    check_in: {
        type: String,
        required: true
    },
    check_out: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false
    },
    bgr_color: {
        type: String,
        required: false
    }
}, { timestamps: true });
exports.bookingModel = mongoose_1.default.model("Booking", bookingSchema);
