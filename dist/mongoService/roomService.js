"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMongoRoomService = exports.deleteMongoRoomService = exports.postMongoRoomService = exports.getMongoRoomService = exports.getMongoRoomsService = void 0;
const rooms_1 = require("../models/rooms");
const getMongoRoomsService = async () => {
    const rooms = await rooms_1.roomModel.find({}).sort({ createdAt: -1 });
    return rooms;
};
exports.getMongoRoomsService = getMongoRoomsService;
const getMongoRoomService = async (id) => {
    const room = await rooms_1.roomModel.findById(id);
    return room;
};
exports.getMongoRoomService = getMongoRoomService;
const postMongoRoomService = async (newRoom) => {
    const addRoom = await rooms_1.roomModel.create(newRoom);
    return addRoom;
};
exports.postMongoRoomService = postMongoRoomService;
const deleteMongoRoomService = async (id) => {
    const deleteRoom = await rooms_1.roomModel.findOneAndDelete({ _id: id });
    return deleteRoom;
};
exports.deleteMongoRoomService = deleteMongoRoomService;
const updateMongoRoomService = async (id, update) => {
    const updateRoom = await rooms_1.roomModel.findOneAndUpdate({ _id: id }, {
        ...update
    });
    return updateRoom;
};
exports.updateMongoRoomService = updateMongoRoomService;
