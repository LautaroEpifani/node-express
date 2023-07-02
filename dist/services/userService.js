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
exports.updateUserService = exports.deleteUserService = exports.postUserService = exports.getUserService = exports.getUsersService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directory = path_1.default.join(__dirname, "..", "data", "users.json");
const readUsers = fs_1.default.readFileSync(directory, "utf8");
const usersJson = JSON.parse(readUsers);
const getUsersService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(readUsers);
});
exports.getUsersService = getUsersService;
const getUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = usersJson.find((user) => user.id === id);
    res.send(JSON.stringify(user));
});
exports.getUserService = getUserService;
const postUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = Object.assign(Object.assign({}, req.body), { id: "askjdakefkj" });
    usersJson.push(newBooking);
    fs_1.default.writeFileSync(directory, JSON.stringify(usersJson));
    const newReadUsers = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadUsers);
});
exports.postUserService = postUserService;
const deleteUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const newArray = usersJson.filter((user) => user.id !== id);
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadUsers = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadUsers);
});
exports.deleteUserService = deleteUserService;
const updateUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let newArray = [];
    let user = usersJson.find((user) => user.id === id);
    user = Object.assign(Object.assign({}, user), req.body);
    if (user) {
        newArray = usersJson.filter((userFilt) => userFilt.id !== id);
        newArray.push(user);
    }
    fs_1.default.writeFileSync(directory, JSON.stringify(newArray));
    const newReadUsers = fs_1.default.readFileSync(directory, "utf8");
    res.send(newReadUsers);
});
exports.updateUserService = updateUserService;
