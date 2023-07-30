"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoom = exports.deleteRoom = exports.postRoom = exports.getRoom = exports.getRooms = void 0;
const roomValidator_1 = require("../validators/roomValidator");
const roomService_1 = require("../mongoService/roomService");
const mongoose_1 = __importDefault(require("mongoose"));
const getRooms = async (req, res) => {
    try {
        const response = await (0, roomService_1.getMongoRoomsService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getRooms = getRooms;
const getRoom = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, roomService_1.getMongoRoomService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.getRoom = getRoom;
const postRoom = async (req, res) => {
    const newRoom = { ...req.body };
    try {
        roomValidator_1.postRoomValidator.validateAsync(newRoom);
        const response = await (0, roomService_1.postMongoRoomService)(newRoom);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.postRoom = postRoom;
const deleteRoom = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, roomService_1.deleteMongoRoomService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.deleteRoom = deleteRoom;
const updateRoom = async (req, res) => {
    const { id } = req.params;
    const roomUpdate = { ...req.body };
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            roomValidator_1.updateRoomValidator.validateAsync(roomUpdate);
            const response = await (0, roomService_1.updateMongoRoomService)(id, roomUpdate);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.updateRoom = updateRoom;
