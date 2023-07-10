import express from "express";
import { Room } from "../interfaces/interfaces";
import {
  deleteSqlRoomService,
  getSqlRoomService,
  getSqlRoomsService,
  postSqlRoomService,
  updateSqlRoomService,
} from "../sqlService/roomService";
import { idValidator } from "../validators/idValidator";
import { postRoomValidator, updateRoomValidator } from "../validators/roomValidator";

export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getSqlRoomsService();
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRoom = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    idValidator.validateAsync(id);
    const response = await getSqlRoomService(id);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const postRoom = async (req: express.Request<{}, {}, Room>, res: express.Response) => {
  const newRoom: Room = { ...req.body };
  try {
    postRoomValidator.validateAsync(newRoom);
    const response = await postSqlRoomService(newRoom);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRoom = async (req: express.Request<{ id: string }>, res: express.Response) => {
  const { id } = req.params;
  try {
    idValidator.validateAsync(id);
    const response = await deleteSqlRoomService(id);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRoom = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const roomUpdate: Room = { ...req.body };
  try {
    idValidator.validateAsync(id);
    updateRoomValidator.validateAsync(roomUpdate);
    const response = await updateSqlRoomService(id, roomUpdate);
    res.status(200).send(response)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
