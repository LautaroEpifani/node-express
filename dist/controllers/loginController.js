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
exports.loginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const loginService_1 = require("../services/loginService");
exports.loginRoutes = express_1.default.Router();
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, loginService_1.loginService)(req, res);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.loginRoutes.post("/", loginController);
