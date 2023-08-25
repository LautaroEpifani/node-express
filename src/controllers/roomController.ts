import express from "express";
import { Room } from "../interfaces/interfaces";
import { postRoomValidator, updateRoomValidator } from "../validators/roomValidator";
import {
  deleteMongoRoomService,
  getMongoRoomService,
  getMongoRoomsService,
  postMongoRoomService,
  updateMongoRoomService,
} from "../mongoService/roomService";
import mongoose from "mongoose";

export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMongoRoomsService();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRoom = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await getMongoRoomService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const postRoom = async (req: express.Request<{}, {}, Room>, res: express.Response) => {
  const newRoom: Room = { ...req.body };
  try {
    postRoomValidator.validateAsync(newRoom);
    const response = await postMongoRoomService(newRoom);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRoom = async (req: express.Request<{ id: string }>, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await deleteMongoRoomService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const updateRoom = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const roomUpdate: Room = { ...req.body };
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      updateRoomValidator.validateAsync(roomUpdate);
      const response = await updateMongoRoomService(id, roomUpdate);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};
