"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessage = exports.deleteMessage = exports.postMessage = exports.getMessage = exports.getMessages = void 0;
const messagesValidator_1 = require("../validators/messagesValidator");
const messageService_1 = require("../mongoService/messageService");
const mongoose_1 = __importDefault(require("mongoose"));
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.getMongoMessagesService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getMessages = getMessages;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, messageService_1.getMongoMessageService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.getMessage = getMessage;
const postMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMessage = Object.assign({}, req.body);
    try {
        messagesValidator_1.postMessageValidator.validateAsync(newMessage);
        const response = yield (0, messageService_1.postMongoMessageService)(newMessage);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postMessage = postMessage;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = yield (0, messageService_1.deleteMongoMessageService)(id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.deleteMessage = deleteMessage;
const updateMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateMessage = Object.assign({}, req.body);
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            messagesValidator_1.updateMessageValidator.validateAsync(updateMessage);
            const response = yield (0, messageService_1.updateMongoMessageService)(id, updateMessage);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    else {
        res.status(404).json({ error: "No such booking" });
    }
});
exports.updateMessage = updateMessage;
