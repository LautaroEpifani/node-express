"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const userValidator_1 = require("../validators/userValidator");
const userService_1 = require("../mongoService/userService");
const mongoose_1 = __importDefault(require("mongoose"));
const getUsers = async (req, res) => {
    try {
        const response = await (0, userService_1.getMongoUsersService)();
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, userService_1.getMongoUserService)(id);
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
exports.getUser = getUser;
const postUser = async (req, res) => {
    const newUser = { ...req.body };
    try {
        userValidator_1.postUserValidator.validateAsync(newUser);
        const response = await (0, userService_1.postMongoUserService)(newUser);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.postUser = postUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            const response = await (0, userService_1.deleteMongoUserService)(id);
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
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const userUpdate = { ...req.body };
    if (mongoose_1.default.Types.ObjectId.isValid(id)) {
        try {
            userValidator_1.updateUserValidator.validateAsync(userUpdate);
            const response = await (0, userService_1.updateMongoUserService)(id, userUpdate);
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
exports.updateUser = updateUser;
