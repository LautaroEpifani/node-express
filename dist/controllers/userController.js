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
exports.updateUser = exports.deleteUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const userService_1 = require("../services/userService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.getUsersService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.getUserService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.postUserService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.postUser = postUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.deleteUserService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.updateUserService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
