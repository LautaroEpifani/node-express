import { Message } from "../interfaces/interfaces";
import { messageModel } from "../models/messages";

export const getMongoMessagesService = async () => {
  const messages = await messageModel.find({}).sort({createdAt: -1})
  return messages;
};

export const getMongoMessageService = async (id: string) => {
  const message = await messageModel.findById(id);
  return message;
};

export const postMongoMessageService = async (newMessage: Message) => {
  const addMessage = await messageModel.create(newMessage);
  return addMessage;
};

export const deleteMongoMessageService = async (id: string) => {
  const deleteMessage = await messageModel.findOneAndDelete({_id: id})
  return deleteMessage;
};

export const updateMongoMessageService = async (id: string, update: Partial<Message>) => {
  const updateMessage = await messageModel.findOneAndUpdate({_id: id}, {
    ...update
  })
  return updateMessage;
};
