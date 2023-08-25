"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    employee_name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        required: true,
    },
    position: {
        type: String,
        enum: ["Manager", "Reception", "Room Service"],
        required: true,
    },
}, { timestamps: true });
exports.userModel = mongoose_1.default.model("User", userSchema);
