import express from "express";
import { Message, Room } from "../models/models";
import {
  deleteSqlMessageService,
  getSqlMessageService,
  getSqlMessagesService,
  postSqlMessageService,
  updateSqlMessageService,
} from "../sqlService/messageService";

export const getMessages = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getSqlMessagesService();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessage = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await getSqlMessageService(id);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const postMessage = async (req: express.Request<{}, {}, Message>, res: express.Response) => {
  const newMessage: Message = { ...req.body };
  try {
    const response = await postSqlMessageService(newMessage);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMessage = async (req: express.Request<{ id: string }>, res: express.Response) => {
  const { id } = req.params;
  try {
    const  response = await deleteSqlMessageService(id);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateMessage = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const updateMessage: Message = { ...req.body };
  try {
    await updateSqlMessageService(id, updateMessage);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
