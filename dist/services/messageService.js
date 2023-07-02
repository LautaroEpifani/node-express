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
const readBookings = fs_1.default.readFileSync(directory, "utf8");
const messagesJson = JSON.parse(readBookings);
const getMessagesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(readBookings);
});
exports.getMessagesService = getMessagesService;
const getMessageService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const message = messagesJson.find((message) => message.id === id);
    res.send(JSON.stringify(message));
});
exports.getMessageService = getMessageService;
const postMessageService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = Object.assign(Object.assign({}, req.body), { id: "aksdjalksjfl" });
    messagesJson.push(newBooking);
    fs_1.default.writeFileSync(directory, JSON.stringify(messagesJson));
    const newReadMessages = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadMessages);
});
exports.postMessageService = postMessageService;
const deleteMessageService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newArray = messagesJson.filter((message) => message.id !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadMessages = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadMessages);
});
exports.deleteMessageService = deleteMessageService;
const updateMessageService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let newArray = [];
    let message = messagesJson.find((message) => message.id === id);
    message = Object.assign(Object.assign({}, message), req.body);
    if (message) {
        newArray = messagesJson.filter((messageFilt) => messageFilt.id !== id);
        newArray.push(message);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadMessages = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadMessages);
});
exports.updateMessageService = updateMessageService;
