"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const loginService_1 = require("../services/loginService");
exports.loginRoutes = express_1.default.Router();
const loginController = async (req, res) => {
    const body = req.body;
    const jsonBody = JSON.parse(body);
    const { email, password } = jsonBody;
    res.set({
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": '*',
        "'Access-Control-Allow-Headers'": '*',
        "Content-Type": "application/json"
    });
    try {
        const response = await (0, loginService_1.loginService)(email, password);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).send(JSON.stringify({ error: error.message }));
    }
};
exports.loginRoutes.post("/", loginController);
