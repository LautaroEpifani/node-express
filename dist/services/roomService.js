"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoomService = exports.deleteRoomService = exports.postRoomService = exports.getRoomService = exports.getRoomsService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "rooms.json");
const readRooms = fs_1.default.readFileSync(directory, "utf8");
const roomsJson = JSON.parse(readRooms);
const getRoomsService = async () => {
    return readRooms;
};
exports.getRoomsService = getRoomsService;
const getRoomService = async (id) => {
    const room = roomsJson.find((room) => room.id.toString() === id);
    return JSON.stringify(room);
};
exports.getRoomService = getRoomService;
const postRoomService = async (newRoom) => {
    roomsJson.push(newRoom);
    fs_1.default.writeFileSync(directory, JSON.stringify(roomsJson));
};
exports.postRoomService = postRoomService;
const deleteRoomService = async (id) => {
    const newArray = roomsJson.filter((room) => room.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.deleteRoomService = deleteRoomService;
const updateRoomService = async (id, newRoom) => {
    let newArray = [];
    let room = roomsJson.find((room) => room.id.toString() === id);
    room = { ...room, ...newRoom };
    if (room) {
        newArray = roomsJson.filter((roomFilt) => roomFilt.id.toString() !== id);
        newArray.push(room);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.updateRoomService = updateRoomService;
