"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserValidator = exports.postUserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postUserValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    employee_name: joi_1.default.string().max(50).required(),
    image: joi_1.default.string().max(400).required(),
    email: joi_1.default.string().max(70).required(),
    password: joi_1.default.string().max(1000).required(),
    start_date: joi_1.default.date().required(),
    description: joi_1.default.string().max(500).required(),
    contact: joi_1.default.string().max(20).required(),
    status: joi_1.default.string().valid("Active", "Inactive").required(),
    position: joi_1.default.string().valid("Manager", "Reception", "Room Service").required(),
});
exports.updateUserValidator = joi_1.default.object({
    _id: joi_1.default.string().max(100).optional(),
    employee_name: joi_1.default.string().max(50).optional(),
    image: joi_1.default.string().max(400).optional(),
    email: joi_1.default.string().max(70).optional(),
    password: joi_1.default.string().max(1000).optional(),
    start_date: joi_1.default.date().optional(),
    description: joi_1.default.string().max(500).optional(),
    contact: joi_1.default.string().max(20).optional(),
    status: joi_1.default.string().valid("Active", "Inactive").optional(),
    position: joi_1.default.string().valid("Manager", "Reception", "Room Service").optional(),
});
