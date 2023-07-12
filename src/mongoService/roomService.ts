import { Room } from "../interfaces/interfaces";
import { roomModel } from "../models/rooms";

export const getMongoRoomsService = async () => {
  const rooms = await roomModel.find({}).sort({createdAt: -1})
  return rooms;
};

export const getMongoRoomService = async (id: string) => {
  const room = await roomModel.findById(id);
  return room;
};

export const postMongoRoomService = async (newRoom: Room) => {
  const addRoom = await roomModel.create(newRoom);
  return addRoom;
};

export const deleteMongoRoomService = async (id: string) => {
  const deleteRoom = await roomModel.findOneAndDelete({_id: id})
  return deleteRoom;
};

export const updateMongoRoomService = async (id: string, update: Partial<Room>) => {
  const updateRoom = await roomModel.findOneAndUpdate({_id: id}, {
    ...update
  })
  return updateRoom;
};
