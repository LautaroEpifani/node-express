"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const roomController_1 = require("../controllers/roomController");
exports.roomRoutes = express_1.default.Router();
exports.roomRoutes.get('/', roomController_1.getRooms);
exports.roomRoutes.get('/:id', roomController_1.getRoom);
exports.roomRoutes.post('/', roomController_1.postRoom);
exports.roomRoutes.delete('/:id', roomController_1.deleteRoom);
exports.roomRoutes.patch('/:id', roomController_1.updateRoom);
