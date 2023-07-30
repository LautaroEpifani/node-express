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
exports.updateMessageService = exports.deleteMessageService = exports.postMessageService = exports.getMessageService = exports.getMessagesService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "messages.json");
const readMessages = fs_1.default.readFileSync(directory, "utf8");
const messagesJson = JSON.parse(readMessages);
const getMessagesService = () => __awaiter(void 0, void 0, void 0, function* () {
    return readMessages;
});
exports.getMessagesService = getMessagesService;
const getMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const message = messagesJson.find((message) => message.id.toString() === id);
    return JSON.stringify(message);
});
exports.getMessageService = getMessageService;
const postMessageService = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    messagesJson.push(newMessage);
    fs_1.default.writeFileSync(directory, JSON.stringify(messagesJson));
});
exports.postMessageService = postMessageService;
const deleteMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const newArray = messagesJson.filter((message) => message.id.toString() !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
});
exports.deleteMessageService = deleteMessageService;
const updateMessageService = (id, newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    let newArray = [];
    let message = messagesJson.find((message) => message.id.toString() === id);
    message = Object.assign(Object.assign({}, message), newMessage);
    if (message) {
        newArray = messagesJson.filter((messageFilt) => messageFilt.id.toString() !== id);
        newArray.push(message);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
});
exports.updateMessageService = updateMessageService;
