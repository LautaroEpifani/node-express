import express from "express";
import { Room } from "../models/models";
import { deleteRoomService, getRoomService, getRoomsService, postRoomService, updateRoomService } from "../services/roomService";


export const getRooms = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getRoomsService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRoom = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getRoomService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const postRoom = async (req: express.Request<{},{},Room> , res: express.Response) => {
  try {
    const response = await postRoomService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteRoom = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteRoomService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const updateRoom = async (req: express.Request, res: express.Response) => {
 
  try {
    const response = await updateRoomService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
