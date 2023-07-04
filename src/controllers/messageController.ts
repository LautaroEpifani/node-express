import express from "express";
import { Room } from "../models/models";
import {
  deleteSqlMessageService,
  getSqlMessageService,
  getSqlMessagesService,
  postSqlMessageService,
  updateSqlMessageService,
} from "../sqlService/messageService";

export const getMessages = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlMessagesService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessage = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlMessageService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const postMessage = async (req: express.Request<{}, {}, Room>, res: express.Response) => {
  try {
    await postSqlMessageService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMessage = async (req: express.Request<{ id: string }>, res: express.Response) => {
  try {
    await deleteSqlMessageService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateMessage = async (req: express.Request, res: express.Response) => {
  try {
    await updateSqlMessageService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
