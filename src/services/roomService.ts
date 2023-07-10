import fs from "fs";
import path from "path";
import { Room } from "../interfaces/interfaces";

const directory = path.join(__dirname, "..", "data", "rooms.json");
const readRooms = fs.readFileSync(directory, "utf8");
const roomsJson = JSON.parse(readRooms);

export const getRoomsService = async () => {
  return readRooms;
};

export const getRoomService = async (id: string) => {
  const room = roomsJson.find((room: Room) => room.id.toString() === id);
  return JSON.stringify(room);
};

export const postRoomService = async (newRoom: Room) => {
  roomsJson.push(newRoom);
  fs.writeFileSync(directory, JSON.stringify(roomsJson));
};

export const deleteRoomService = async (id: string) => {
  const newArray = roomsJson.filter((room: Room) => room.id.toString() !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
};

export const updateRoomService = async (id: string, newRoom: Room) => {
  let newArray: Room[] = [];
  let room: Room | undefined = roomsJson.find((room: Room) => room.id.toString() === id);
  room = { ...room, ...newRoom };
  if (room) {
    newArray = roomsJson.filter((roomFilt: Room) => roomFilt.id.toString() !== id);
    newArray.push(room);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
};
