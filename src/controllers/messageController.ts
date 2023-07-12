import express from "express";
import { Message } from "../interfaces/interfaces";
import { postMessageValidator, updateMessageValidator } from "../validators/messagesValidator";
import {
  deleteMongoMessageService,
  getMongoMessageService,
  getMongoMessagesService,
  postMongoMessageService,
  updateMongoMessageService,
} from "../mongoService/messageService";
import mongoose from "mongoose";

export const getMessages = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMongoMessagesService();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessage = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await getMongoMessageService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const postMessage = async (req: express.Request<{}, {}, Message>, res: express.Response) => {
  const newMessage: Message = { ...req.body };
  try {
    postMessageValidator.validateAsync(newMessage);
    const response = await postMongoMessageService(newMessage);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMessage = async (req: express.Request<{ id: string }>, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await deleteMongoMessageService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const updateMessage = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const updateMessage: Message = { ...req.body };
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      updateMessageValidator.validateAsync(updateMessage);
      const response = await updateMongoMessageService(id, updateMessage);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};
