import fs from "fs";
import path from "path";
import express from "express";
import { Message } from "../models/models";
import uuid from "react-uuid";

const directory = path.join(__dirname, "..", "data", "messages.json");
const readBookings = fs.readFileSync(directory, "utf8");
const messagesJson = JSON.parse(readBookings);

export const getMessagesService = async (req: express.Request, res: express.Response) => {
  res.send(readBookings);
};

export const getMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const message = messagesJson.find((message: Message) => message.id === id);
  res.send(JSON.stringify(message));
};

export const postMessageService = async (req: express.Request, res: express.Response) => {
  const newBooking: Message = { ...req.body, id: uuid() };
  messagesJson.push(newBooking);
  fs.writeFileSync(directory, JSON.stringify(messagesJson));
  const newReadMessages = fs.readFileSync(directory, "utf8");
  res.send(newReadMessages);
};

export const deleteMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newArray = messagesJson.filter((message: Message) => message.id !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadMessages = fs.readFileSync(directory, "utf8");
  res.send(newReadMessages);
};

export const updateMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  let newArray: Message[] = [];
  let message: Message | undefined = messagesJson.find((message: Message) => message.id === id);
  message = { ...message, ...req.body };
  if (message) {
    newArray = messagesJson.filter((messageFilt: Message) => messageFilt.id !== id);
    newArray.push(message);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadMessages = fs.readFileSync(directory, "utf8");
  res.send(newReadMessages);
};