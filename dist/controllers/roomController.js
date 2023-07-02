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
exports.updateRoom = exports.deleteRoom = exports.postRoom = exports.getRoom = exports.getRooms = void 0;
const roomService_1 = require("../services/roomService");
const getRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.getRoomsService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getRooms = getRooms;
const getRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.getRoomService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getRoom = getRoom;
const postRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.postRoomService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postRoom = postRoom;
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.deleteRoomService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteRoom = deleteRoom;
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, roomService_1.updateRoomService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateRoom = updateRoom;
