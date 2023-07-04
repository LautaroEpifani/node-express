import fs from "fs";
import path from "path";
import express from "express";
import { Room } from "../models/models";

const directory = path.join(__dirname, "..", "data", "rooms.json");
const readRooms = fs.readFileSync(directory, "utf8");
const roomsJson = JSON.parse(readRooms);

export const getRoomsService = async (req: express.Request, res: express.Response) => {
  res.send(readRooms);
};

export const getRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const room = roomsJson.find((room: Room) => room.id.toString() === id);
  res.send(JSON.stringify(room));
};

export const postRoomService = async (req: express.Request, res: express.Response) => {
  const newRoom: Room = { ...req.body, id: "ñlaskfñaslf" };
  roomsJson.push(newRoom);
  fs.writeFileSync(directory, JSON.stringify(roomsJson));
  const newReadRooms = fs.readFileSync(directory, "utf8");
  res.send(newReadRooms);
};

export const deleteRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newArray = roomsJson.filter((room: Room) => room.id.toString() !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadRooms = fs.readFileSync(directory, "utf8");
  res.send(newReadRooms);
};

export const updateRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  let newArray: Room[] = [];
  let room: Room | undefined = roomsJson.find((room: Room) => room.id.toString() === id);
  room = { ...room, ...req.body };
  if (room) {
    newArray = roomsJson.filter((roomFilt: Room) => roomFilt.id.toString() !== id);
    newArray.push(room);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadRooms = fs.readFileSync(directory, "utf8");
  res.send(newReadRooms);
};
