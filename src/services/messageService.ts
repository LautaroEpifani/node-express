import fs from "fs";
import path from "path";
import { Message } from "../models/models";

const directory = path.join(__dirname, "..", "data", "messages.json");
const readMessages = fs.readFileSync(directory, "utf8");
const messagesJson = JSON.parse(readMessages);

export const getMessagesService = async () => {
  return readMessages;
};

export const getMessageService = async (id: string) => {
  const message = messagesJson.find((message: Message) => message.id.toString() === id);
  return JSON.stringify(message);
};

export const postMessageService = async (newMessage: Message) => {
  messagesJson.push(newMessage);
  fs.writeFileSync(directory, JSON.stringify(messagesJson));
};

export const deleteMessageService = async (id: string) => {
  const newArray = messagesJson.filter((message: Message) => message.id.toString() !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
};

export const updateMessageService = async (id:string, newMessage: Message) => {
  let newArray: Message[] = [];
  let message: Message | undefined = messagesJson.find((message: Message) => message.id.toString() === id);
  message = { ...message, ...newMessage };
  if (message) {
    newArray = messagesJson.filter((messageFilt: Message) => messageFilt.id.toString() !== id);
    newArray.push(message);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
};