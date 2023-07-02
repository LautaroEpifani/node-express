import express from "express";
import { Room } from "../models/models";
import { deleteMessageService, getMessageService, getMessagesService, postMessageService, updateMessageService } from "../services/messageService";


export const getMessages = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMessagesService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessage = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMessageService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const postMessage = async (req: express.Request<{},{},Room> , res: express.Response) => {
  try {
    const response = await postMessageService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteMessage = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteMessageService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const updateMessage = async (req: express.Request, res: express.Response) => {
 
  try {
    const response = await updateMessageService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
