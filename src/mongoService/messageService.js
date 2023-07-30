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
exports.updateMongoMessageService = exports.deleteMongoMessageService = exports.postMongoMessageService = exports.getMongoMessageService = exports.getMongoMessagesService = void 0;
const messages_1 = require("../models/messages");
const getMongoMessagesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield messages_1.messageModel.find({}).sort({ createdAt: -1 });
    return messages;
});
exports.getMongoMessagesService = getMongoMessagesService;
const getMongoMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield messages_1.messageModel.findById(id);
    return message;
});
exports.getMongoMessageService = getMongoMessageService;
const postMongoMessageService = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    const addMessage = yield messages_1.messageModel.create(newMessage);
    return addMessage;
});
exports.postMongoMessageService = postMongoMessageService;
const deleteMongoMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteMessage = yield messages_1.messageModel.findOneAndDelete({ _id: id });
    return deleteMessage;
});
exports.deleteMongoMessageService = deleteMongoMessageService;
const updateMongoMessageService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateMessage = yield messages_1.messageModel.findOneAndUpdate({ _id: id }, Object.assign({}, update));
    return updateMessage;
});
exports.updateMongoMessageService = updateMongoMessageService;
