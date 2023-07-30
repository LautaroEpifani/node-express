"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMongoMessageService = exports.deleteMongoMessageService = exports.postMongoMessageService = exports.getMongoMessageService = exports.getMongoMessagesService = void 0;
const messages_1 = require("../models/messages");
const getMongoMessagesService = async () => {
    const messages = await messages_1.messageModel.find({}).sort({ createdAt: -1 });
    return messages;
};
exports.getMongoMessagesService = getMongoMessagesService;
const getMongoMessageService = async (id) => {
    const message = await messages_1.messageModel.findById(id);
    return message;
};
exports.getMongoMessageService = getMongoMessageService;
const postMongoMessageService = async (newMessage) => {
    const addMessage = await messages_1.messageModel.create(newMessage);
    return addMessage;
};
exports.postMongoMessageService = postMongoMessageService;
const deleteMongoMessageService = async (id) => {
    const deleteMessage = await messages_1.messageModel.findOneAndDelete({ _id: id });
    return deleteMessage;
};
exports.deleteMongoMessageService = deleteMongoMessageService;
const updateMongoMessageService = async (id, update) => {
    const updateMessage = await messages_1.messageModel.findOneAndUpdate({ _id: id }, {
        ...update
    });
    return updateMessage;
};
exports.updateMongoMessageService = updateMongoMessageService;
