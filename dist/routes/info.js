"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoRoute = void 0;
const express_1 = __importDefault(require("express"));
exports.infoRoute = express_1.default.Router();
exports.infoRoute.get("/", (req, res) => {
    const hotelName = "Miranda Hotel";
    const endpoints = [
        { path: "/rooms", methods: ["GET", "POST"] },
        { path: "/bookings", methods: ["GET", "POST"] }
    ];
    res.json({ hotelName, endpoints });
});
