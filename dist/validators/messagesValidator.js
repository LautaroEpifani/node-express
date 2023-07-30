"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessageValidator = exports.postMessageValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postMessageValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).required(),
    date: joi_1.default.date().required(),
    hour: joi_1.default.string().max(5).required(),
    name: joi_1.default.string().max(50).required(),
    email: joi_1.default.string().max(70).required(),
    phone: joi_1.default.string().max(20).required(),
    subject: joi_1.default.string().max(20).required(),
    comment: joi_1.default.string().max(500).required(),
    archived: joi_1.default.boolean().required(),
});
exports.updateMessageValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    date: joi_1.default.date().optional(),
    hour: joi_1.default.string().max(5).optional(),
    name: joi_1.default.string().max(50).optional(),
    email: joi_1.default.string().max(70).optional(),
    phone: joi_1.default.string().max(20).optional(),
    subject: joi_1.default.string().max(20).optional(),
    comment: joi_1.default.string().max(500).optional(),
    archived: joi_1.default.boolean().optional(),
});
