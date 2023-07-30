"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
exports.messageRoutes = express_1.default.Router();
exports.messageRoutes.get('/', messageController_1.getMessages);
exports.messageRoutes.get('/:id', messageController_1.getMessage);
exports.messageRoutes.post('/', messageController_1.postMessage);
exports.messageRoutes.delete('/:id', messageController_1.deleteMessage);
exports.messageRoutes.patch('/:id', messageController_1.updateMessage);
