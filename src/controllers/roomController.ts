import express from "express";
import { Room } from "../models/models";
import {
  deleteSqlRoomService,
  getSqlRoomService,
  getSqlRoomsService,
  postSqlRoomService,
  updateSqlRoomService,
} from "../sqlService/roomService";

export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlRoomsService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRoom = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlRoomService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const postRoom = async (req: express.Request<{}, {}, Room>, res: express.Response) => {
  try {
    await postSqlRoomService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRoom = async (req: express.Request<{ id: string }>, res: express.Response) => {
  try {
    await deleteSqlRoomService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRoom = async (req: express.Request, res: express.Response) => {
  try {
    await updateSqlRoomService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
