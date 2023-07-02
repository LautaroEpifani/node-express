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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessage = exports.deleteMessage = exports.postMessage = exports.getMessage = exports.getMessages = void 0;
const messageService_1 = require("../services/messageService");
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.getMessagesService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getMessages = getMessages;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.getMessageService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getMessage = getMessage;
const postMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.postMessageService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postMessage = postMessage;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.deleteMessageService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteMessage = deleteMessage;
const updateMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, messageService_1.updateMessageService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateMessage = updateMessage;
