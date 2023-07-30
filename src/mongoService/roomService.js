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
exports.updateMongoRoomService = exports.deleteMongoRoomService = exports.postMongoRoomService = exports.getMongoRoomService = exports.getMongoRoomsService = void 0;
const rooms_1 = require("../models/rooms");
const getMongoRoomsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const rooms = yield rooms_1.roomModel.find({}).sort({ createdAt: -1 });
    return rooms;
});
exports.getMongoRoomsService = getMongoRoomsService;
const getMongoRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield rooms_1.roomModel.findById(id);
    return room;
});
exports.getMongoRoomService = getMongoRoomService;
const postMongoRoomService = (newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    const addRoom = yield rooms_1.roomModel.create(newRoom);
    return addRoom;
});
exports.postMongoRoomService = postMongoRoomService;
const deleteMongoRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteRoom = yield rooms_1.roomModel.findOneAndDelete({ _id: id });
    return deleteRoom;
});
exports.deleteMongoRoomService = deleteMongoRoomService;
const updateMongoRoomService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateRoom = yield rooms_1.roomModel.findOneAndUpdate({ _id: id }, Object.assign({}, update));
    return updateRoom;
});
exports.updateMongoRoomService = updateMongoRoomService;
