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
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const response = await (0, loginService_1.loginService)(email, password);
        const str = JSON.stringify(response);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).send(JSON.stringify({ error: error.message }));
    }
};
exports.loginRoutes.post("/", loginController);
