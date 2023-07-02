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
const getRoomsService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(readRooms);
});
exports.getRoomsService = getRoomsService;
const getRoomService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const room = roomsJson.find((room) => room.id === id);
    res.send(JSON.stringify(room));
});
exports.getRoomService = getRoomService;
const postRoomService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newRoom = Object.assign(Object.assign({}, req.body), { id: "ñlaskfñaslf" });
    roomsJson.push(newRoom);
    fs_1.default.writeFileSync(directory, JSON.stringify(roomsJson));
    const newReadRooms = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadRooms);
});
exports.postRoomService = postRoomService;
const deleteRoomService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newArray = roomsJson.filter((room) => room.id !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadRooms = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadRooms);
});
exports.deleteRoomService = deleteRoomService;
const updateRoomService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let newArray = [];
    let room = roomsJson.find((room) => room.id === id);
    room = Object.assign(Object.assign({}, room), req.body);
    if (room) {
        newArray = roomsJson.filter((roomFilt) => roomFilt.id !== id);
        newArray.push(room);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadRooms = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadRooms);
});
exports.updateRoomService = updateRoomService;
