"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessageService = exports.deleteMessageService = exports.postMessageService = exports.getMessageService = exports.getMessagesService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "messages.json");
const readMessages = fs_1.default.readFileSync(directory, "utf8");
const messagesJson = JSON.parse(readMessages);
const getMessagesService = async () => {
    return readMessages;
};
exports.getMessagesService = getMessagesService;
const getMessageService = async (id) => {
    const message = messagesJson.find((message) => message.id.toString() === id);
    return JSON.stringify(message);
};
exports.getMessageService = getMessageService;
const postMessageService = async (newMessage) => {
    messagesJson.push(newMessage);
    fs_1.default.writeFileSync(directory, JSON.stringify(messagesJson));
};
exports.postMessageService = postMessageService;
const deleteMessageService = async (id) => {
    const newArray = messagesJson.filter((message) => message.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.deleteMessageService = deleteMessageService;
const updateMessageService = async (id, newMessage) => {
    let newArray = [];
    let message = messagesJson.find((message) => message.id.toString() === id);
    message = { ...message, ...newMessage };
    if (message) {
        newArray = messagesJson.filter((messageFilt) => messageFilt.id.toString() !== id);
        newArray.push(message);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
};
exports.updateMessageService = updateMessageService;
