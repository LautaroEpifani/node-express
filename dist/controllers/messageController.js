"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessage = exports.deleteMessage = exports.postMessage = exports.getMessage = exports.getMessages = void 0;
const messagesValidator_1 = require("../validators/messagesValidator");
const messageService_1 = require("../mongoService/messageService");
const mongoose_1 = __importDefault(require("mongoose"));
const getMessages = async (req, res) => {
    try {
        const response = await (0, messageService_1.getMongoMessagesService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getMessages = getMessages;
const getMessage = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, messageService_1.getMongoMessageService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.getMessage = getMessage;
const postMessage = async (req, res) => {
    const newMessage = { ...req.body };
    try {
        messagesValidator_1.postMessageValidator.validateAsync(newMessage);
        const response = await (0, messageService_1.postMongoMessageService)(newMessage);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.postMessage = postMessage;
const deleteMessage = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, messageService_1.deleteMongoMessageService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.deleteMessage = deleteMessage;
const updateMessage = async (req, res) => {
    const { id } = req.params;
    const updateMessage = { ...req.body };
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            messagesValidator_1.updateMessageValidator.validateAsync(updateMessage);
            const response = await (0, messageService_1.updateMongoMessageService)(id, updateMessage);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
};
exports.updateMessage = updateMessage;
