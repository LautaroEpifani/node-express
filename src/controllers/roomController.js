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
exports.updateRoom = exports.deleteRoom = exports.postRoom = exports.getRoom = exports.getRooms = void 0;
const roomValidator_1 = require("../validators/roomValidator");
const roomService_1 = require("../mongoService/roomService");
const mongoose_1 = __importDefault(require("mongoose"));
const getRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.getMongoRoomsService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getRooms = getRooms;
const getRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, roomService_1.getMongoRoomService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.getRoom = getRoom;
const postRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newRoom = Object.assign({}, req.body);
    try {
        roomValidator_1.postRoomValidator.validateAsync(newRoom);
        const response = yield (0, roomService_1.postMongoRoomService)(newRoom);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postRoom = postRoom;
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, roomService_1.deleteMongoRoomService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.deleteRoom = deleteRoom;
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const roomUpdate = Object.assign({}, req.body);
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            roomValidator_1.updateRoomValidator.validateAsync(roomUpdate);
            const response = yield (0, roomService_1.updateMongoRoomService)(id, roomUpdate);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.updateRoom = updateRoom;
