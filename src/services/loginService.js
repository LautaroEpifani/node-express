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
exports.loginService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const users_1 = require("../models/users");
const loginService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.userModel.find({ email: email, password: (0, utils_1.hashPassword)(password) });
    console.log(user);
    if (user[0].email !== email || user[0].password !== (0, utils_1.hashPassword)(password)) {
        console.log("user doesn't exist");
    }
    else {
        const token = jsonwebtoken_1.default.sign(Object.assign(Object.assign({}, user), { id: null }), process.env.TOKEN_SECRET, {
            expiresIn: 1800,
        });
        return { auth: true, token };
    }
});
exports.loginService = loginService;
