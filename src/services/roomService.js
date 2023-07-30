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
exports.updateRoomService = exports.deleteRoomService = exports.postRoomService = exports.getRoomService = exports.getRoomsService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "rooms.json");
const readRooms = fs_1.default.readFileSync(directory, "utf8");
const roomsJson = JSON.parse(readRooms);
const getRoomsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return readRooms;
});
exports.getRoomsService = getRoomsService;
const getRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const room = roomsJson.find((room) => room.id.toString() === id);
    return JSON.stringify(room);
});
exports.getRoomService = getRoomService;
const postRoomService = (newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    roomsJson.push(newRoom);
    fs_1.default.writeFileSync(directory, JSON.stringify(roomsJson));
});
exports.postRoomService = postRoomService;
const deleteRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const newArray = roomsJson.filter((room) => room.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
});
exports.deleteRoomService = deleteRoomService;
const updateRoomService = (id, newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    let newArray = [];
    let room = roomsJson.find((room) => room.id.toString() === id);
    room = Object.assign(Object.assign({}, room), newRoom);
    if (room) {
        newArray = roomsJson.filter((roomFilt) => roomFilt.id.toString() !== id);
        newArray.push(room);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
});
exports.updateRoomService = updateRoomService;
