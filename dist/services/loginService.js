"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const users_1 = require("../models/users");
const loginService = async (email, password) => {
    const user = await users_1.userModel.find({ email: email, password: (0, utils_1.hashPassword)(password) });
    if (user[0].email !== email || user[0].password !== (0, utils_1.hashPassword)(password)) {
        console.log("user doesn't exist");
    }
    else {
        const token = jsonwebtoken_1.default.sign({ ...user, id: null }, process.env.TOKEN_SECRET, {
            expiresIn: 1800,
        });
        return { auth: true, token: token ? token : " " };
    }
};
exports.loginService = loginService;
